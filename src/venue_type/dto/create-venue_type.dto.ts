import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueTypeDto {
  @ApiProperty({
    example: "Stadion",
    description: "event bo'lib o'tadigan joy turlari",
  })
  name: string;
}
