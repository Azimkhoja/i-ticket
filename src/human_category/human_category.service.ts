import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { HumanCategory } from "./entities/human_category.entity";

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory)
    private humanCategoryRepository: typeof HumanCategory
  ) {}
  async create(createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryRepository.create(createHumanCategoryDto);
  }

  async findAll() {
    return this.humanCategoryRepository.findAll();
  }

  async findOne(id: number) {
    return this.humanCategoryRepository.findOne({ where: { id } });
  }

  async update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    return this.humanCategoryRepository.update(updateHumanCategoryDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return this.humanCategoryRepository.destroy({ where: { id } });
  }
}
