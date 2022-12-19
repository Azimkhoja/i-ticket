import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateVenuePhotoDto {
  @ApiProperty({
    example: 5,
    description: "eventlar bo'ladigan saroylarning id si",
  })
  @IsNumber({}, { message: "venue id must be number type" })
  venue_id: number;
  @ApiProperty({
    example: "/venue/photos/istialol.jpg",
    description: "event bo'lib o'tadigan joyning rasmi saqlanadigan url",
  })
  @IsString({ message: "photo url must be string type" })
  photo_url: string;
}
