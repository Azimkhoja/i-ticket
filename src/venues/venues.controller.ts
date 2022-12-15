import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { VenuesService } from "./venues.service";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Venue } from "./entities/venue.entity";

@ApiTags("Venues")
@Controller("venues")
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}
  
  @ApiOperation({ summary: "Venueni yaratish" })
    @ApiResponse({ status: 201, type: Venue })
  @Post()
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venuesService.create(createVenueDto);
  }
  
  @ApiOperation({ summary: "Barcha Venuelar ro'yxatini olish" })
    @ApiResponse({ status: 200, type: [Venue] })
  @Get()
  findAll() {
    return this.venuesService.findAll();
  }
  
  @ApiOperation({ summary: "bitta Venue haqida malumot olish" })
    @ApiResponse({ status: 200, type: Venue })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venuesService.findOne(+id);
  }
  
  @ApiOperation({ summary: "Venue ga o'zgartirish kiritish" })
    @ApiResponse({ status: 200, type: Venue })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venuesService.update(+id, updateVenueDto);
  }
  
  @ApiOperation({ summary: "Venueni o'chirish" })
    @ApiResponse({ status: 200, type: Venue })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venuesService.remove(+id);
  }
}
