import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerAddressDto {
  @ApiProperty({ example: 1 })
  customer_id: number;
  @ApiProperty({ example: "Jamshid" })
  name: string;
  @ApiProperty({ example: 1 })
  country_id: number;
  @ApiProperty({ example: 1 })
  region_id: number;
  @ApiProperty({ example: 1 })
  district_id: number;
  @ApiProperty({ example: "Obirahmat ko'chasi" })
  street: string;
  @ApiProperty({ example: 11 })
  house: string;
  @ApiProperty({ example: 1 })
  flat: number;
  @ApiProperty({ example: "geolocation" })
  location: string;
  @ApiProperty({ example: "60007104" })
  postal_index: string;
  @ApiProperty({ example: "something" })
  info: string;
}
