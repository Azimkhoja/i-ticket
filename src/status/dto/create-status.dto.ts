import { ApiProperty } from "@nestjs/swagger";

export class CreateStatusDto {
  @ApiProperty({ example: "waiting" })
  name: string;
}
