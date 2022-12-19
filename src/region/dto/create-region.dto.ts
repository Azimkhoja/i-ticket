import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNumber, IsString } from "class-validator";

export class CreateRegionDto {
  @ApiProperty({ example: "Toshkent" })
  @IsEmpty({ message: "name can not be empty" })
  @IsString({ message: "name must be string type" })
  name: string;
  @ApiProperty({ example: 48 })
  @IsNumber({}, { message: "country id must be number type" })
  country_id: number;
}
