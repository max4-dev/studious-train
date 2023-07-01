import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @ApiProperty({example: 'Max'})
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({example: '123'})
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({example: 'Max@gmail.com'})
  @IsNotEmpty()
  readonly email: string;
}