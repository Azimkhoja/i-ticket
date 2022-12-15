import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketDto {
  @ApiProperty({example: 3})
  event_id: number;
  @ApiProperty({example: 2})
  seat_id: number;
  @ApiProperty({example: 50000})
  price: number;
  @ApiProperty({example: 3})
  service_fee: number;
  @ApiProperty({example: 2})
  status_id: number;
  @ApiProperty({example: 'elektron chipta'})
  ticket_type: string;
}
