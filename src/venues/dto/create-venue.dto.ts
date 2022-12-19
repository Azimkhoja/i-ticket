import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateVenueDto {
  @ApiProperty({
    example: "Istiqlol san'at saroyi",
    description: "Event bo'lsdigan joy nomi",
  })
  @IsString({ message: "name must be string type" })
  name: string;
  @ApiProperty({ example: "Manzil: ", description: "Joy manzili" })
  @IsString({ message: "location must be string type" })
  location: string;
  @ApiProperty({ example: "istiqlol.uz" })
  @IsString({ message: "site must be string type" })
  site: string;
  @ApiProperty({ example: "717745774" })
  @IsString({ message: "phone must be string type " })
  phone: string;
  @ApiProperty({
    example: 3,
    description: "event bo'ladigan joy qaysi typedaligini aniqlovchi ustun",
  })
  @IsNumber({}, { message: "venue type id must be number type " })
  venue_type_id: number;
  @ApiProperty({ example: 5 })
  schema: number;
  @ApiProperty({
    example: 4,
    description:
      "event bo'ladigan saroy qaysi viloyatda ekanligini aniqlaydigan ustun",
  })
  @IsNumber({}, { message: "region id must be number type " })
  region_id: number;
  @ApiProperty({
    example: 2,
    description:
      "event bo'ladigan saroy qaysi tumanda ekanligini aniqlaydigan ustun",
  })
  @IsNumber({}, { message: "district  id must be number type " })
  district_id: number;
}
