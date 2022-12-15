import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { District } from "./entities/district.entity";

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District)
    private districtRepository: typeof District
  ) {}
  async create(createDistrictDto: CreateDistrictDto) {
    return this.districtRepository.create(createDistrictDto);
  }

  async findAll() {
    return this.districtRepository.findAll();
  }

  async findOne(id: number) {
    return this.districtRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return this.districtRepository.update(updateDistrictDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return this.districtRepository.destroy({ where: { id } });
  }
}
