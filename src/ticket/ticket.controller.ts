import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TicketService } from "./ticket.service";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Ticket } from "./entities/ticket.entity";

@ApiTags("Tikcket")
@Controller("ticket")
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @ApiOperation({ summary: "Ticketni yaratish" })
  @ApiResponse({ status: 201, type: Ticket })
  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @ApiOperation({ summary: "Barcha Ticketlar ro'yxatini olish" })
  @ApiResponse({ status: 200, type: [Ticket] })
  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @ApiOperation({ summary: "bitta Ticket haqida malumot olish" })
  @ApiResponse({ status: 200, type: Ticket })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ticketService.findOne(+id);
  }

  @ApiOperation({ summary: "Ticket ga o'zgartirish kiritish" })
  @ApiResponse({ status: 200, type: Ticket })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(+id, updateTicketDto);
  }

  @ApiOperation({ summary: "Ticketni o'chirish" })
  @ApiResponse({ status: 200, type: Ticket })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.ticketService.remove(+id);
  }
}
