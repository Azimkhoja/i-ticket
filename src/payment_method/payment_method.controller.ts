import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PaymentMethodService } from "./payment_method.service";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PaymentMethod } from "./entities/payment_method.entity";

@ApiTags("Payment Method")
@Controller("payment-method")
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @ApiOperation({ summary: "PaymentMethodni yaratish" })
  @ApiResponse({ status: 201, type: PaymentMethod })
  @Post()
  create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodService.create(createPaymentMethodDto);
  }

  @ApiOperation({ summary: "Barcha PaymentMethodlar ro'yxatini olish" })
  @ApiResponse({ status: 200, type: [PaymentMethod] })
  @Get()
  findAll() {
    return this.paymentMethodService.findAll();
  }

  @ApiOperation({ summary: "bitta PaymentMethod haqida malumot olish" })
  @ApiResponse({ status: 200, type: PaymentMethod })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.paymentMethodService.findOne(+id);
  }

  @ApiOperation({ summary: "PaymentMethod ga o'zgartirish kiritish" })
  @ApiResponse({ status: 200, type: PaymentMethod })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePaymentMethodDto: UpdatePaymentMethodDto
  ) {
    return this.paymentMethodService.update(+id, updatePaymentMethodDto);
  }

  @ApiOperation({ summary: "PaymentMethodni o'chirish" })
  @ApiResponse({ status: 200, type: PaymentMethod })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.paymentMethodService.remove(+id);
  }
}
