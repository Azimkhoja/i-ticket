import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { HumanCategoryService } from "./human_category.service";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { HumanCategory } from "./entities/human_category.entity";

@ApiTags("Human Category")
@Controller("human-category")
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @ApiOperation({ summary: "HumanCategoryni yaratish" })
  @ApiResponse({ status: 201, type: HumanCategory })
  @Post()
  create(@Body() createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryService.create(createHumanCategoryDto);
  }

  @ApiOperation({ summary: "Barcha HumanCategorylar ro'yxatini olish" })
  @ApiResponse({ status: 200, type: [HumanCategory] })
  @Get()
  findAll() {
    return this.humanCategoryService.findAll();
  }

  @ApiOperation({ summary: "bitta HumanCategory haqida malumot olish" })
  @ApiResponse({ status: 200, type: HumanCategory })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.humanCategoryService.findOne(+id);
  }

  @ApiOperation({ summary: "HumanCategory ga o'zgartirish kiritish" })
  @ApiResponse({ status: 200, type: HumanCategory })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateHumanCategoryDto: UpdateHumanCategoryDto
  ) {
    return this.humanCategoryService.update(+id, updateHumanCategoryDto);
  }

  @ApiOperation({ summary: "HumanCategoryni o'chirish" })
  @ApiResponse({ status: 200, type: HumanCategory })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.humanCategoryService.remove(+id);
  }
}
