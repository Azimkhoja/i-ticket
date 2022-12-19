import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateEventDto {
  @ApiProperty({ example: "Kelgindi Kelin" })
  @IsString({ message: "name must be string type" })
  name: string;
  @ApiProperty({ example: "rasm.jpg" })
  @IsString({ message: "phonto url must be string type" })
  photo: string;
  @ApiProperty({ example: "some Date" })
  start_date: Date;
  @ApiProperty({ example: "17:00" })
  start_time: Date;
  @ApiProperty({ example: "some Date" })
  finish_date: Date;
  @ApiProperty({ example: "18:30" })
  finish_time: Date;
  @ApiProperty({ example: "kino haqida " })
  info: string;
  @ApiProperty({ example: 4 })
  @IsNumber({}, { message: "event type id must be number type" })
  event_type_id: number;
  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: "human category id must be number type" })
  human_category_id: number;
  @ApiProperty({ example: 3 })
  @IsNumber({}, { message: "venue id must be number type" })
  venue_id: number;
  @ApiProperty({ example: 2 })
  lang_id: number;
  @ApiProperty({ example: "2006-10-02" })
  release_date: Date;
}
