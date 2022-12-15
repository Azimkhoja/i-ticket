import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatDto {
  @ApiProperty({ example: 11 })
  sector: string;
  @ApiProperty({ example: 11 })
  row_number: number;
  @ApiProperty({ example: 11 })
  number: number;
  @ApiProperty({ example: 11 })
  venue_id: number;
  @ApiProperty({ example: 11 })
  seat_type_id: number;
  @ApiProperty({ example: 11 })
  location_id_schema: string;
}
