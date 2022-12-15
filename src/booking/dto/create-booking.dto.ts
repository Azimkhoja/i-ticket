import { ApiProperty } from "@nestjs/swagger";

export class CreateBookingDto {
  @ApiProperty({ example: 4 })
  cart_id: number;
  @ApiProperty({ example: "14-12-2022" })
  createdAt: Date;
  @ApiProperty({ example: "when finished" })
  finished: Date;
  @ApiProperty({ example: 2 })
  payment_method_id: number;
  @ApiProperty({ example: 3 })
  delivery_method_id: number;
  @ApiProperty({ example: 1 })
  discount_coupon_id: number;
  @ApiProperty({ example: 2 })
  status_id: number;
}
