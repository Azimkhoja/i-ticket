import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateVenueTypeDto {
  @ApiProperty({
    example: "Stadion",
    description: "event bo'lib o'tadigan joy turlari",
  })
  @IsString({message: "name must be string type"})
  name: string;
}
