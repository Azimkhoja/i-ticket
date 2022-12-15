import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { VenueTypeService } from "./venue_type.service";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { VenueType } from "./entities/venue_type.entity";

@ApiTags("VenueType")
@Controller("venue-type")
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  @ApiOperation({ summary: "VenueTypeni yaratish" })
  @ApiResponse({ status: 201, type: VenueType })
  @Post()
  create(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.create(createVenueTypeDto);
  }

  @ApiOperation({ summary: "Barcha VenueTypelar ro'yxatini olish" })
  @ApiResponse({ status: 200, type: [VenueType] })
  @Get()
  findAll() {
    return this.venueTypeService.findAll();
  }

  @ApiOperation({ summary: "bitta VenueType haqida malumot olish" })
  @ApiResponse({ status: 200, type: VenueType })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venueTypeService.findOne(+id);
  }

  @ApiOperation({ summary: "VenueType ga o'zgartirish kiritish" })
  @ApiResponse({ status: 200, type: VenueType })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateVenueTypeDto: UpdateVenueTypeDto
  ) {
    return this.venueTypeService.update(+id, updateVenueTypeDto);
  }

  @ApiOperation({ summary: "VenueTypeni o'chirish" })
  @ApiResponse({ status: 200, type: VenueType })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venueTypeService.remove(+id);
  }
}
