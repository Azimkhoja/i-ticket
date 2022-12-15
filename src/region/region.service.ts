import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { Region } from "./entities/region.entity";

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region)
    private regionRepository: typeof Region
  ) {}
  async create(createRegionDto: CreateRegionDto) {
    return this.regionRepository.create(createRegionDto);
  }

  async findAll() {
    return this.regionRepository.findAll();
  }

  async findOne(id: number) {
    return this.regionRepository.findOne({ where: { id } });
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    return this.regionRepository.update(updateRegionDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return this.regionRepository.destroy({ where: { id } });
  }
}
