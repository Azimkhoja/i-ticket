import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsString } from "class-validator";

export class CreateAdminDto {
  @ApiProperty({ example: "John Doe" })
  @IsString({ message: "name must be string type" })
  name: string;
  @ApiProperty()
  @IsString({ message: "email must be string type" })
  @IsEmail({}, { message: "wrong email enterence" })
  login: string;
  @ApiProperty({ example: "password" })
  @IsString({ message: "hashpassword must be string type" })
  hashed_password: string;
  @ApiProperty({ example: false })
  @IsBoolean()
  is_active: boolean;
  @ApiProperty({ example: true })
  @IsBoolean()
  is_creator: boolean;
  @ApiProperty({ example: "Refreshtoken " })
  @IsString({ message: "hashrefreshtoken must be string type" })
  hashed_refresh_token: string;
}
