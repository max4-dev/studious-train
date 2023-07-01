import { ApiProperty } from '@nestjs/swagger';
export class LoginUserRequest {
  @ApiProperty({example: 'Max'})
  username: string;

  @ApiProperty({example: '123'})
  password: string
}

export class LoginUserResponse {
  @ApiProperty(
    {example: {user: {
    userId: 1,
    username: 'Max',
    email: 'Max@gmail.com'
  }}})
  user: {
    userId: number;
    username: string;
    email: string
  }

  @ApiProperty({example: 'Logged in'})
  message: string
}

export class LogoutUserResponse {
  @ApiProperty({example: 'session has ended'})
  message: string
}

export class LoginCheckResponse {
  @ApiProperty({example: '1'})
  userId: number;

  @ApiProperty({example: 'Max'})
  username: string;

  @ApiProperty({example: 'Max@gmail.com'})
  email: string
}

export class SignupResponse {
  @ApiProperty({example: '1'})
  userId: number;

  @ApiProperty({example: 'Max'})
  username: string;

  @ApiProperty({example: '$2b$10$VkzG0f.S5p0FoMwNZqS/XeccAe6ugEuDpU7HnFXBkqPB0vxrQEi/m'})
  password: string;

  @ApiProperty({example: 'Max@gmail.com'})
  email: string

  @ApiProperty({example: '2023-06-14T06:11:02.642Z'})
  updatedAt: string

  @ApiProperty({example: '2023-06-14T06:11:02.642Z'})
  createdAt: string
}