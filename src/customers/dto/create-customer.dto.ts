import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerDto {
  @ApiProperty({ example: "Jamshid" })
  first_name: string;
  @ApiProperty({ example: "Hasanov" })
  last_name: string;
  @ApiProperty({ example: "902225767" })
  phone: string;
  @ApiProperty({ example: "password" })
  hashed_password: string;
  @ApiProperty({ example: "email@gmail.com" })
  email: string;
  @ApiProperty({ example: "Date" })
  birth_date: Date;
  @ApiProperty({ example: 1 })
  gender_id: number;
  @ApiProperty({ example: 2 })
  lang_id: number;
  @ApiProperty({ example: "refreshtoken" })
  hashed_refresh_token: string;
}
