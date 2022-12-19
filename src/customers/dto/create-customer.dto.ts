import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateCustomerDto {
  @ApiProperty({ example: "Jamshid" })
  @IsString({ message: "firstname must be string type" })
  first_name: string;
  @ApiProperty({ example: "Hasanov" })
  @IsString({ message: "lastname must be string type" })
  last_name: string;
  @ApiProperty({ example: "902225767" })
  @IsString({ message: "phone number must be string type" })
  phone: string;
  @ApiProperty({ example: "password" })
  @IsString({ message: "hashed password must be string type" })
  hashed_password: string;
  @ApiProperty({ example: "email@gmail.com" })
  @IsString({ message: "email must be string type" })
  @IsEmail({}, { message: "wrong email enterence" })
  email: string;
  @ApiProperty({ example: "Date" })
  birth_date: Date;
  @ApiProperty({ example: 1 })
  gender_id: number;
  @ApiProperty({ example: 2 })
  lang_id: number;
  @ApiProperty({ example: "refreshtoken" })
  @IsString({ message: "hashed refresh token must be string type" })
  hashed_refresh_token: string;
}
