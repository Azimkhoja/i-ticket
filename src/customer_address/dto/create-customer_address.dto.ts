import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNumber, IsString } from "class-validator";

export class CreateCustomerAddressDto {
  @ApiProperty({ example: 1 })
  @IsEmpty({ message: "customer_id cannot be empty" })
  @IsNumber({}, { message: "value must be in type number" })
  customer_id: number;
  @ApiProperty({ example: "Jamshid" })
  @IsEmpty({ message: "name cannot be empty" })
  @IsString({ message: "name must be in type string" })
  name: string;
  @ApiProperty({ example: 1 })
  @IsEmpty({ message: "country_id cannot be empty" })
  @IsNumber({}, { message: "value must be in type number" })
  country_id: number;
  @ApiProperty({ example: 1 })
  @IsEmpty({ message: "region_id cannot be empty" })
  @IsNumber({}, { message: "value must be in type number" })
  region_id: number;
  @ApiProperty({ example: 1 })
  @IsEmpty({ message: "district_id cannot be empty" })
  @IsNumber({}, { message: "value must be in type number" })
  district_id: number;
  @ApiProperty({ example: "Obirahmat ko'chasi" })
  @IsEmpty({ message: "street cannot be empty" })
  @IsString({ message: "street must be in type string" })
  street: string;
  @ApiProperty({ example: 11 })
  @IsString({ message: "house must be in type string" })
  house: string;
  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: "value must be in type number" })
  flat: number;
  @ApiProperty({ example: "geolocation" })
  @IsString({ message: "location must be in type string" })
  location: string;
  @ApiProperty({ example: "60007104" })
  @IsString({ message: "postal_index must be in type string" })
  postal_index: string;
  @ApiProperty({ example: "something" })
  info: string;
}
