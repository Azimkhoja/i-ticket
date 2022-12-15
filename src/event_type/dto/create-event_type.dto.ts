import { ApiProperty } from "@nestjs/swagger";

export class CreateEventTypeDto {
  @ApiProperty({ example: "Sport" })
  name: string;
  @ApiProperty({ example: 3 })
  parent_event_type_id?: number;
}
