import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateStatusDto {
  @ApiProperty({ example: "waiting" })
  @IsString({ message: "name must be string type" })
  name: string;
}
