import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentMethodDto {
  @ApiProperty({ example: "Karta orqali" })
  name: string;
}
