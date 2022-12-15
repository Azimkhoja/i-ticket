import { ApiProperty } from "@nestjs/swagger";

export class CreateVenuePhotoDto {
  @ApiProperty({
    example: 5,
    description: "eventlar bo'ladigan saroylarning id si",
  })
  venue_id: number;
  @ApiProperty({
    example: "/venue/photos/istialol.jpg",
    description: "event bo'lib o'tadigan joyning rasmi saqlanadigan url",
  })
  photo_url: string;
}
