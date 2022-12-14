import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./entities/admin.entity";

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminRepository: typeof Admin) {}

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

  async remove(id: number) {
    return this.adminRepository.destroy({ where: { id } });
  }
}
