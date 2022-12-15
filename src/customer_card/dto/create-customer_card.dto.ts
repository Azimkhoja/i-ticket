import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerCardDto {
  @ApiProperty({ example: 11 })
  customer_id: number;
  @ApiProperty({ example: "Jamshid" })
  name: string;
  @ApiProperty({ example: "902225767" })
  phone: string;
  @ApiProperty({ example: "9860600169983554" })
  card_number: string;
  @ApiProperty({ example: 2026 })
  year: number;
  @ApiProperty({ example: "05" })
  month: string;
  @ApiProperty({ example: false })
  is_active: boolean;
  @ApiProperty({ example: true })
  is_main: boolean;
}
