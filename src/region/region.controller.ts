import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { RegionService } from "./region.service";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Region } from "./entities/region.entity";

@ApiTags("Region")
@Controller("region")
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiOperation({ summary: "Regionni yaratish" })
  @ApiResponse({ status: 201, type: Region })
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @ApiOperation({ summary: "Barcha Regionlar ro'yxatini olish" })
  @ApiResponse({ status: 200, type: [Region] })
  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @ApiOperation({ summary: "bitta Region haqida malumot olish" })
  @ApiResponse({ status: 200, type: Region })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.regionService.findOne(+id);
  }

  @ApiOperation({ summary: "Region ga o'zgartirish kiritish" })
  @ApiResponse({ status: 200, type: Region })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(+id, updateRegionDto);
  }

  @ApiOperation({ summary: "Regionni o'chirish" })
  @ApiResponse({ status: 200, type: Region })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.regionService.remove(+id);
  }
}
