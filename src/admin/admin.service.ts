import { ForbiddenException, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./entities/admin.entity";
import *as bcrypt from 'bcryptjs'
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login-admin.dto";
import { JwtPayload } from "jsonwebtoken";
import { Response } from "express";


@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminRepository: typeof Admin, private jwtService: JwtService) {}

  async create(createAdminDto: CreateAdminDto) {
    return this.adminRepository.create(createAdminDto);
  }

  
  async findAll() {
    return this.adminRepository.findAll();
  }

  async findOne(id: number) {
    return this.adminRepository.findOne({ where: { id } });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminRepository.update(updateAdminDto, { where: { id } });
  }
  private async getAdminByEmail(login: string) {
    const admin = await this.adminRepository.findOne({
      where: { login },
      include: { all: true },
    });
    return admin;
  }

  async remove(id: number) {
    const admin = await this.adminRepository.destroy({ where: { id } });
    if(!admin)
      return "not found"
    return "admin deleted"
  }
  async login(loginDto: LoginDto, res: Response){
    const {email, password} = loginDto
    const admin = await this.adminRepository.findOne({
      where: {login:email}})
      if(!admin) {
        throw new ForbiddenException('wrong email or password ')
      }
      const passwordMatches = await bcrypt.compare(password, admin.hashed_password)
      if(!passwordMatches) throw new ForbiddenException('wrong passwor or email')

      const tokens = await this.getTokens(admin.id, admin.login)
      await this.updateRefreshToken(admin.id, tokens.refresh_token)
      res.cookie('refresh_token', tokens.refresh_token, {maxAge: 7* 24 * 60 *60 *1000, httpOnly: true})
      return {
        message: "Admin creted",
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token
      }
    }
    //===========================================================
    async registrate(adminDto: CreateAdminDto, res: Response){
    const candidate = await this.getAdminByEmail(adminDto.login)
    if(candidate) {
      throw new HttpException('This email is already exists', HttpStatus.BAD_REQUEST);
    }
    
    const hashedPAssword = await bcrypt.hash(adminDto.hashed_password, 7)
    const admin = await this.adminRepository.create({
      ...adminDto,
        hashed_password: hashedPAssword
      })
      admin.is_active = true
      admin.save()
      const tokens = await this.getTokens(admin.id, admin.login)
      await this.updateRefreshToken(admin.id, tokens.refresh_token)
      res.cookie('refresh_token', tokens.refresh_token, {maxAge: 7* 24 * 60 *60 *1000, httpOnly: true})
      return {
        ...adminDto,
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token
      }
}


private async getTokens(userId: number, email: string) {
  const jwtPayload: JwtPayload = {
    id: userId,
    email: email,
  };

  const [accessToken, refreshToken] = await Promise.all([
    this.jwtService.signAsync(jwtPayload, {
      secret: process.env.ACCESS_TOKEN_KEY,
      expiresIn: process.env.ACCESS_TOKEN_TIME,
    }),

    this.jwtService.signAsync(jwtPayload, {
      secret: process.env.REFRESH_TOKEN_KEY,
      expiresIn: process.env.REFRESH_TOKEN_TIME,
    }),
  ]);

  return {
    access_token: accessToken,
    refresh_token: refreshToken,
  };

}
private async updateRefreshToken(
  userId: number,
  refreshToken: string
){
  const hashedRefreshtoken = await bcrypt.hash(refreshToken, 7);
  await this.adminRepository.update({hashed_refresh_token: hashedRefreshtoken},
    {where: { id: +userId }},
  );
}
}
