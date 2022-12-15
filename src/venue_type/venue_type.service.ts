import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { VenueType } from "./entities/venue_type.entity";

@Injectable()
export class VenueTypeService {
  constructor(
    @InjectModel(VenueType) private venueTypeRepository: typeof VenueType
  ) {}
  async create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeRepository.create(createVenueTypeDto);
  }

  async findAll() {
    return this.venueTypeRepository.findAll();
  }

  async findOne(id: number) {
    return this.venueTypeRepository.findOne({ where: { id } });
  }

  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypeRepository.update(updateVenueTypeDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return this.venueTypeRepository.destroy({ where: { id } });
  }
}
