import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSeatTypeDto {
  @ApiProperty({ example: "vip" })
  @IsString({ message: "name must be string type" })
  name: string;
}
