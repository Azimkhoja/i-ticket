import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateDiscountCouponDto {
  @ApiProperty({ example: "gold" })
  @IsString({ message: "name must be string typew" })
  name: string;
}
