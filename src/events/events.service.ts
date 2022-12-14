import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { Event } from "./entities/event.entity";

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event) private eventRepository: typeof Event) {}
  async create(createEventDto: CreateEventDto) {
    return this.eventRepository.create(createEventDto);
  }

  async findAll() {
    return this.eventRepository.findAll();
  }

  async findOne(id: number) {
    return this.eventRepository.findOne({ where: { id } });
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    return this.eventRepository.update(updateEventDto, { where: { id } });
  }

  async remove(id: number) {
    return this.eventRepository.destroy({ where: { id } });
  }
}
