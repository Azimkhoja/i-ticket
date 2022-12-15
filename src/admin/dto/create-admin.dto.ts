import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
  @ApiProperty({ example: "John Doe" })
  name: string;
  @ApiProperty()
  login: string;
  @ApiProperty({ example: "password" })
  hashed_password: string;
  @ApiProperty({ example: false })
  is_active: boolean;
  @ApiProperty({ example: true })
  is_creator: boolean;
  @ApiProperty({ example: "Refreshtoken " })
  hashed_refresh_token: string;
}
