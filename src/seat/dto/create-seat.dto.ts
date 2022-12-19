import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNumber, IsString } from "class-validator";

export class CreateSeatDto {
  @ApiProperty({ example: 11 })
  @IsString({ message: "sector must be string type" })
  sector: string;
  @ApiProperty({ example: 11 })
  @IsNumber({}, { message: "row number must be number type" })
  row_number: number;
  @ApiProperty({ example: 11 })
  @IsNumber({}, { message: "seat_number must be number type" })
  number: number;
  @ApiProperty({ example: 11 })
  @IsNumber({}, { message: "venue id must be number type" })
  venue_id: number;
  @ApiProperty({ example: 11 })
  @IsNumber({}, { message: "seat type id  must be number type" })
  seat_type_id: number;
  @ApiProperty({ example: 11 })
  location_id_schema: string;
}
