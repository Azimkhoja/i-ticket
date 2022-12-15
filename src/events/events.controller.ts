import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { EventsService } from "./events.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Events")
@Controller("events")
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @ApiOperation({ summary: "Eventni yaratish" })
  @ApiResponse({ status: 201, type: Event })
  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @ApiOperation({ summary: "Barcha Eventlar ro'yxatini olish" })
  @ApiResponse({ status: 200, type: [Event] })
  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @ApiOperation({ summary: "bitta Event haqida malumot olish" })
  @ApiResponse({ status: 200, type: Event })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventsService.findOne(+id);
  }

  @ApiOperation({ summary: "Event ga o'zgartirish kiritish" })
  @ApiResponse({ status: 200, type: Event })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(+id, updateEventDto);
  }

  @ApiOperation({ summary: "Eventni o'chirish" })
  @ApiResponse({ status: 200, type: Event })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventsService.remove(+id);
  }
}
