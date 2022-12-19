import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateDistrictDto {
  @ApiProperty({ example: "Zangiota" })
  @IsString({ message: "name must be string type" })
  name: string;
  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: "region id must be number type" })
  region_id: number;
}
