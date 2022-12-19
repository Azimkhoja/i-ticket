import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateBookingDto {
  @ApiProperty({ example: 4 })
  @IsNumber({}, { message: "value must be number type" })
  cart_id: number;
  @ApiProperty({ example: "14-12-2022" })
  createdAt: Date;
  @ApiProperty({ example: "when finished" })
  finished: Date;
  @ApiProperty({ example: 2 })
  @IsNumber({}, { message: "value must be number type" })
  payment_method_id: number;
  @ApiProperty({ example: 3 })
  @IsNumber({}, { message: "value must be number type" })
  delivery_method_id: number;
  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: "value must be number type" })
  discount_coupon_id: number;
  @ApiProperty({ example: 2 })
  @IsNumber({}, { message: "value must be number type" })
  status_id: number;
}
