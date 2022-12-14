import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { SeatType } from "./entities/seat_type.entity";

@Injectable()
export class SeatTypeService {
  constructor(
    @InjectModel(SeatType) private seatTypeRepository: typeof SeatType
  ) {}
  async create(createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeRepository.create(createSeatTypeDto);
  }

  async findAll() {
    return this.seatTypeRepository.findAll();
  }

  async findOne(id: number) {
    return this.seatTypeRepository.findOne({ where: { id } });
  }

  async update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    return this.seatTypeRepository.update(updateSeatTypeDto, { where: { id } });
  }

  async remove(id: number) {
    return this.seatTypeRepository.destroy({ where: { id } });
  }
}
