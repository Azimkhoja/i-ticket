import { ApiProperty } from "@nestjs/swagger";

export class CreateEventDto {
  @ApiProperty({ example: "Kelgindi Kelin" })
  name: string;
  @ApiProperty({ example: "rasm.jpg" })
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
  event_type_id: number;
  @ApiProperty({ example: 1 })
  human_category_id: number;
  @ApiProperty({ example: 3 })
  venue_id: number;
  @ApiProperty({ example: 2 })
  lang_id: number;
  @ApiProperty({ example: "2006-10-02" })
  release_date: Date;
}
