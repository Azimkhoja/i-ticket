import { ApiProperty } from "@nestjs/swagger";

export class CreateCartDto {
  @ApiProperty({})
  ticket_id: number;
  @ApiProperty({})
  customer_id: number;
  @ApiProperty({})
  createdAt: Date;
  @ApiProperty({})
  finishedAt: Date;
  @ApiProperty({})
  status_id: number;
}
