import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { DistrictService } from "./district.service";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { District } from "./entities/district.entity";

@ApiTags("District")
@Controller("district")
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @ApiOperation({ summary: "Districtni yaratish" })
  @ApiResponse({ status: 201, type: District })
  @Post()
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }

  @ApiOperation({ summary: "Barcha Districtlar ro'yxatini olish" })
  @ApiResponse({ status: 200, type: [District] })
  @Get()
  findAll() {
    return this.districtService.findAll();
  }

  @ApiOperation({ summary: "bitta District haqida malumot olish" })
  @ApiResponse({ status: 200, type: District })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.districtService.findOne(+id);
  }

  @ApiOperation({ summary: "District ga o'zgartirish kiritish" })
  @ApiResponse({ status: 200, type: District })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDistrictDto: UpdateDistrictDto
  ) {
    return this.districtService.update(+id, updateDistrictDto);
  }

  @ApiOperation({ summary: "Districtni o'chirish" })
  @ApiResponse({ status: 200, type: District })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.districtService.remove(+id);
  }
}
