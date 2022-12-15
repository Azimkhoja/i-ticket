import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginDto {
  @ApiProperty({
    example: "example@gamil.com",
    description: "foydalanuvchi electron pochtasi",
  })
  @IsString({ message: "Email satr shaklda bo'lishi kerak" })
  @IsEmail({}, { message: "Xato email kiritildi" })
  readonly email: string;

  @ApiProperty({
    example: "123345",
    description: "foydalanuvchi maxfiy kodi",
  })
  @IsString({ message: "Email satr shaklda bo'lishi kerak" })
  @MinLength(4, { message: "parol 4 dan kam bolmasligi kerak" })
  readonly password: string;
}
