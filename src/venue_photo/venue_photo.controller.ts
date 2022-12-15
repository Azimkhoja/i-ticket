import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { VenuePhotoService } from "./venue_photo.service";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { VenuePhoto } from "./entities/venue_photo.entity";

@ApiTags("VenuePhoto")
@Controller("venue-photo")
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @ApiOperation({ summary: "VenuePhotoni yaratish" })
  @ApiResponse({ status: 201, type: VenuePhoto })
  @Post()
  create(@Body() createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoService.create(createVenuePhotoDto);
  }

  @ApiOperation({ summary: "Barcha VenuePhotolar ro'yxatini olish" })
  @ApiResponse({ status: 200, type: [VenuePhoto] })
  @Get()
  findAll() {
    return this.venuePhotoService.findAll();
  }

  @ApiOperation({ summary: "bitta VenuePhoto haqida malumot olish" })
  @ApiResponse({ status: 200, type: VenuePhoto })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venuePhotoService.findOne(+id);
  }

  @ApiOperation({ summary: "VenuePhoto ga o'zgartirish kiritish" })
  @ApiResponse({ status: 200, type: VenuePhoto })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateVenuePhotoDto: UpdateVenuePhotoDto
  ) {
    return this.venuePhotoService.update(+id, updateVenuePhotoDto);
  }

  @ApiOperation({ summary: "VenuePhotoni o'chirish" })
  @ApiResponse({ status: 200, type: VenuePhoto })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venuePhotoService.remove(+id);
  }
}
