import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { Venue } from "./entities/venue.entity";

@Injectable()
export class VenuesService {
  constructor(@InjectModel(Venue) private venueRepository: typeof Venue) {}
  async create(createVenueDto: CreateVenueDto) {
    const newVenue = await this.venueRepository.create(createVenueDto);
    return newVenue;
  }

  async findAll() {
    return this.venueRepository.findAll();
  }

  async findOne(id: number) {
    return this.venueRepository.findOne({ where: { id } });
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {
    return this.venueRepository.update(updateVenueDto, { where: { id } });
  }

  async remove(id: number) {
    return this.venueRepository.destroy({ where: { id } });
  }
}
