import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatTypeDto {
  @ApiProperty({ example: "vip" })
  name: string;
}
