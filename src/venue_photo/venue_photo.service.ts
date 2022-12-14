import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { VenuePhoto } from "./entities/venue_photo.entity";

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto) private venuePhotoRepository: typeof VenuePhoto
  ) {}
  async create(createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoRepository.create(createVenuePhotoDto);
  }

  async findAll() {
    return this.venuePhotoRepository.findAll();
  }

  async findOne(id: number) {
    return this.venuePhotoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return this.venuePhotoRepository.update(updateVenuePhotoDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return this.venuePhotoRepository.destroy({ where: { id } });
  }
}
