import { ApiProperty } from "@nestjs/swagger";

export class CreateDeliveryMethodDto {
  @ApiProperty({ example: "uygacha" })
  name: string;
}
