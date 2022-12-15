import { ApiProperty } from "@nestjs/swagger";

export class CreateRegionDto {
  @ApiProperty({ example: "Toshkent" })
  name: string;
  @ApiProperty({ example: 48 })
  country_id: number;
}
