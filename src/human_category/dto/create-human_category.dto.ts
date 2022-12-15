import { ApiProperty } from "@nestjs/swagger";

export class CreateHumanCategoryDto {
  @ApiProperty({ example: "Ommabop" })
  name: string;
  @ApiProperty({ example: 10 })
  start_age: number;
  @ApiProperty({ example: 75 })
  finish_age: number;
  @ApiProperty({
    example: 2,
    description: "1 yoki 2 kitiladi yani erkak yoki ayol ",
  })
  gender: number;
}
