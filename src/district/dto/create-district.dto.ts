import { ApiProperty } from "@nestjs/swagger";

export class CreateDistrictDto {
  @ApiProperty({ example: "Zangiota" })
  name: string;
  @ApiProperty({ example: 1 })
  region_id: number;
}
