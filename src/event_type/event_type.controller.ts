import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { EventTypeService } from "./event_type.service";
import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { EventType } from "./entities/event_type.entity";

@ApiTags("EventType")
@Controller("event-type")
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @ApiOperation({ summary: "EventTypeni yaratish" })
  @ApiResponse({ status: 201, type: EventType })
  @Post()
  create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @ApiOperation({ summary: "Barcha EventTypelar ro'yxatini olish" })
  @ApiResponse({ status: 200, type: [EventType] })
  @Get()
  findAll() {
    return this.eventTypeService.findAll();
  }

  @ApiOperation({ summary: "bitta EventType haqida malumot olish" })
  @ApiResponse({ status: 200, type: EventType })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventTypeService.findOne(+id);
  }

  @ApiOperation({ summary: "EventType ga o'zgartirish kiritish" })
  @ApiResponse({ status: 200, type: EventType })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateEventTypeDto: UpdateEventTypeDto
  ) {
    return this.eventTypeService.update(+id, updateEventTypeDto);
  }

  @ApiOperation({ summary: "EventTypeni o'chirish" })
  @ApiResponse({ status: 200, type: EventType })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventTypeService.remove(+id);
  }
}
