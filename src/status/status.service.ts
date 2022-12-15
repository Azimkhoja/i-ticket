import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateStatusDto } from "./dto/create-status.dto";
import { UpdateStatusDto } from "./dto/update-status.dto";
import { Status } from "./entities/status.entity";

@Injectable()
export class StatusService {
  constructor(
    @InjectModel(Status)
    private statusRepository: typeof Status
  ) {}
  async create(createStatusDto: CreateStatusDto) {
    return this.statusRepository.create(createStatusDto);
  }

  async findAll() {
    return this.statusRepository.findAll();
  }

  async findOne(id: number) {
    return this.statusRepository.findOne({ where: { id } });
  }

  async update(id: number, updateStatusDto: UpdateStatusDto) {
    return this.statusRepository.update(updateStatusDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return this.statusRepository.destroy({ where: { id } });
  }
}
