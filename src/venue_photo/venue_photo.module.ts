import { Module } from "@nestjs/common";
import { VenuePhotoService } from "./venue_photo.service";
import { VenuePhotoController } from "./venue_photo.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { VenuePhoto } from "./entities/venue_photo.entity";

@Module({
  imports: [SequelizeModule.forFeature([VenuePhoto])],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService],
})
export class VenuePhotoModule {}
