import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
import { Country } from "./entities/country.entity";

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country) private countryRepository: typeof Country
  ) {}
  async create(createCountryDto: CreateCountryDto) {
    return this.countryRepository.create(createCountryDto);
  }

  async findAll() {
    return this.countryRepository.findAll();
  }

  async findOne(id: number) {
    return this.countryRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    return this.countryRepository.update(updateCountryDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return this.countryRepository.destroy({ where: { id } });
  }
}
