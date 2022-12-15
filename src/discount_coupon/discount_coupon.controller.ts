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
import { DiscountCouponService } from "./discount_coupon.service";
import { CreateDiscountCouponDto } from "./dto/create-discount_coupon.dto";
import { UpdateDiscountCouponDto } from "./dto/update-discount_coupon.dto";
import { DiscountCoupon } from "./entities/discount_coupon.entity";

@ApiTags("Discount Coupon")
@Controller("discount-coupon")
export class DiscountCouponController {
  constructor(private readonly discountCouponService: DiscountCouponService) {}

  @ApiOperation({ summary: "DiscountCouponni yaratish" })
  @ApiResponse({ status: 201, type: DiscountCoupon })
  @Post()
  create(@Body() createDiscountCouponDto: CreateDiscountCouponDto) {
    return this.discountCouponService.create(createDiscountCouponDto);
  }

  @ApiOperation({ summary: "Barcha DiscountCouponlar ro'yxatini olish" })
  @ApiResponse({ status: 200, type: [DiscountCoupon] })
  @Get()
  findAll() {
    return this.discountCouponService.findAll();
  }

  @ApiOperation({ summary: "bitta DiscountCoupon haqida malumot olish" })
  @ApiResponse({ status: 200, type: DiscountCoupon })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.discountCouponService.findOne(+id);
  }

  @ApiOperation({ summary: "DiscountCoupon ga o'zgartirish kiritish" })
  @ApiResponse({ status: 200, type: DiscountCoupon })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDiscountCouponDto: UpdateDiscountCouponDto
  ) {
    return this.discountCouponService.update(+id, updateDiscountCouponDto);
  }

  @ApiOperation({ summary: "DiscountCouponni o'chirish" })
  @ApiResponse({ status: 200, type: DiscountCoupon })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.discountCouponService.remove(+id);
  }
}
