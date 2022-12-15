import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueDto {
  @ApiProperty({
    example: "Istiqlol san'at saroyi",
    description: "Event bo'lsdigan joy nomi",
  })
  name: string;
  @ApiProperty({ example: "Manzil: ", description: "Joy manzili" })
  location: string;
  @ApiProperty({ example: "istiqlol.uz" })
  site: string;
  @ApiProperty({ example: "717745774" })
  phone: string;
  @ApiProperty({
    example: 3,
    description: "event bo'ladigan joy qaysi typedaligini aniqlovchi ustun",
  })
  venue_type_id: number;
  @ApiProperty({ example: 5 })
  schema: number;
  @ApiProperty({
    example: 4,
    description:
      "event bo'ladigan saroy qaysi viloyatda ekanligini aniqlaydigan ustun",
  })
  region_id: number;
  @ApiProperty({
    example: 2,
    description:
      "event bo'ladigan saroy qaysi tumanda ekanligini aniqlaydigan ustun",
  })
  district_id: number;
}
