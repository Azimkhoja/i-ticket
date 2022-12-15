import { ApiProperty } from "@nestjs/swagger";

export class CreateDiscountCouponDto {
  @ApiProperty({ example: "gold" })
  name: string;
}
