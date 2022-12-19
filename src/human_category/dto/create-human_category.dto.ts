import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNumber, IsString } from "class-validator";

export class CreateHumanCategoryDto {
  @ApiProperty({ example: "Ommabop" })
  @IsEmpty({ message: "name must be entered" })
  @IsString({ message: "name must be string type" })
  name: string;
  @ApiProperty({ example: 10 })
  @IsNumber({}, { message: "start_age must be number type" })
  start_age: number;
  @ApiProperty({ example: 75 })
  @IsNumber({}, { message: "finish_age must be number type" })
  finish_age: number;
  @ApiProperty({
    example: 2,
    description: "1 yoki 2 kitiladi yani erkak yoki ayol ",
  })
  gender: number;
}
