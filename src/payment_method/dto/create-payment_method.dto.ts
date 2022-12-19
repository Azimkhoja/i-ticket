import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsString } from "class-validator";

export class CreatePaymentMethodDto {
  @ApiProperty({ example: "Karta orqali" })
  @IsEmpty({ message: "name must be entered" })
  @IsString({ message: "name must be string type" })
  name: string;
}
