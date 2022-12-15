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
import { CustomerCardService } from "./customer_card.service";
import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";
import { CustomerCard } from "./entities/customer_card.entity";

@ApiTags("CustomerCard")
@Controller("customer-card")
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @ApiOperation({ summary: "CustomerCardni yaratish" })
  @ApiResponse({ status: 201, type: CustomerCard })
  @Post()
  create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @ApiOperation({ summary: "Barcha CustomerCardlar ro'yxatini olish" })
  @ApiResponse({ status: 200, type: [CustomerCard] })
  @Get()
  findAll() {
    return this.customerCardService.findAll();
  }

  @ApiOperation({ summary: "bitta CustomerCard haqida malumot olish" })
  @ApiResponse({ status: 200, type: CustomerCard })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerCardService.findOne(+id);
  }

  @ApiOperation({ summary: "CustomerCard ga o'zgartirish kiritish" })
  @ApiResponse({ status: 200, type: CustomerCard })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerCardDto: UpdateCustomerCardDto
  ) {
    return this.customerCardService.update(+id, updateCustomerCardDto);
  }

  @ApiOperation({ summary: "CustomerCardni o'chirish" })
  @ApiResponse({ status: 200, type: CustomerCard })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerCardService.remove(+id);
  }
}
