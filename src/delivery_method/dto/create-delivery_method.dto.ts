import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateDeliveryMethodDto {
  @ApiProperty({ example: "uygacha" })
  @IsString({ message: "name must be string type" })
  name: string;
}
