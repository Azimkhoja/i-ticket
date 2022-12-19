import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { LoginDto } from "./dto/login-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./entities/admin.entity";

@ApiTags("Admins")
@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: "Admin yatish" })
  @ApiResponse({ status: 201, type: Admin })
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }
  @ApiOperation({ summary: "Admin registrate" })
  @ApiResponse({ status: 201, type: Admin })
  @Post("registrate")
  registrate(
    @Body() createAdminDto: CreateAdminDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.adminService.registrate(createAdminDto, res);
  }
  @ApiOperation({ summary: "login Admin" })
  @ApiResponse({ status: 201, type: Admin })
  @Post("login")
  login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    return this.adminService.login(loginDto, res);
  }

  @ApiOperation({ summary: "Barcha adminlar ro'yxatini olish" })
  @ApiResponse({ status: 200, type: [Admin] })
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({ summary: "bitta admin haqida malumot olish" })
  @ApiResponse({ status: 200, type: Admin })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiOperation({ summary: "Admin ga o'zgartirish kiritish" })
  @ApiResponse({ status: 200, type: Admin })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({ summary: "Adminni o'chirish" })
  @ApiResponse({ status: 200, type: Admin })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }
}
