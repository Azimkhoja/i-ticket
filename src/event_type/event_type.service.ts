import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
import { EventType } from "./entities/event_type.entity";

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType) private eventTypeRepository: typeof EventType
  ) {}
  async create(createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeRepository.create(createEventTypeDto);
  }

  async findAll() {
    return this.eventTypeRepository.findAll();
  }

  async findOne(id: number) {
    return this.eventTypeRepository.findOne({ where: { id } });
  }

  async update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    return this.eventTypeRepository.update(updateEventTypeDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return this.eventTypeRepository.destroy({ where: { id } });
  }
}
