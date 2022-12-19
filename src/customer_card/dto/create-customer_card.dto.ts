import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNumber, IsString } from "class-validator";

export class CreateCustomerCardDto {
  @ApiProperty({ example: 11 })
  @IsEmpty({ message: "customer_id can not be empty" })
  @IsNumber({}, { message: "customer_id must be in typ number" })
  customer_id: number;
  @ApiProperty({ example: "Jamshid" })
  @IsString({ message: "name must be type string" })
  name: string;
  @ApiProperty({ example: "902225767" })
  @IsString({ message: "Phone must be string" })
  phone: string;
  @ApiProperty({ example: "9860600169983554" })
  @IsString({ message: "card_number must be string" })
  card_number: string;
  @ApiProperty({ example: 2026 })
  year: number;
  @ApiProperty({ example: "05" })
  @IsString()
  month: string;
  @ApiProperty({ example: false })
  is_active: boolean;
  @ApiProperty({ example: true })
  is_main: boolean;
}
