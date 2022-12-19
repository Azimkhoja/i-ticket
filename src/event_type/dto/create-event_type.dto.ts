import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateEventTypeDto {
  @ApiProperty({ example: "Sport" })
  @IsString({ message: "name must be string type" })
  name: string;
  @ApiProperty({ example: 3 })
  parent_event_type_id?: number;
}
