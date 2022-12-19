import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCountryDto {
  @ApiProperty({})
  @IsString({ message: "name must be in string type" })
  name: string;
}
