import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateTicketDto {
  @ApiProperty({ example: 3 })
  @IsNumber({}, { message: "event id must be number type" })
  event_id: number;
  @ApiProperty({ example: 2 })
  @IsNumber({}, { message: "seat id must be number type" })
  seat_id: number;
  @ApiProperty({ example: 50000 })
  @IsNumber({}, { message: "price must be number type" })
  price: number;
  @ApiProperty({ example: 3 })
  @IsNumber({}, { message: "service fee must be number type" })
  service_fee: number;
  @ApiProperty({ example: 2 })
  @IsNumber({}, { message: "status id must be number type" })
  status_id: number;
  @ApiProperty({ example: "elektron chipta" })
  @IsString({ message: "ticket type must be string type" })
  ticket_type: string;
}
