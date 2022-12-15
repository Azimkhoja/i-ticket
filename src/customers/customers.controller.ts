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
import { CustomersService } from "./customers.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { Customer } from "./entities/customer.entity";

@ApiTags("Customers")
@Controller("customers")
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @ApiOperation({ summary: "Customersni yaratish" })
  @ApiResponse({ status: 201, type: Customer })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @ApiOperation({ summary: "Barcha Customerslar ro'yxatini olish" })
  @ApiResponse({ status: 200, type: [Customer] })
  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @ApiOperation({ summary: "bitta Customer haqida malumot olish" })
  @ApiResponse({ status: 200, type: Customer })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customersService.findOne(+id);
  }

  @ApiOperation({ summary: "Customer ga o'zgartirish kiritish" })
  @ApiResponse({ status: 200, type: Customer })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerDto: UpdateCustomerDto
  ) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @ApiOperation({ summary: "Customersni o'chirish" })
  @ApiResponse({ status: 200, type: Customer })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customersService.remove(+id);
  }
}
