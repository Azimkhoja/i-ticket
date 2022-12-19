import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateCartDto {
  @ApiProperty({})
  @IsNumber({}, { message: "value must be number type" })
  ticket_id: number;
  @ApiProperty({})
  @IsNumber({}, { message: "value must be number type" })
  customer_id: number;
  @ApiProperty({})
  createdAt: Date;
  @ApiProperty({})
  finishedAt: Date;
  @ApiProperty({})
  @IsNumber({}, { message: "value must be number type" })
  status_id: number;
}
