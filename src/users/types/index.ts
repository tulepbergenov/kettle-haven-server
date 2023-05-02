import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Jhon' })
  username: string;

  @ApiProperty({ example: '31337' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Jhon',
        password: '31337',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'Session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Jhon' })
  username: string;

  @ApiProperty({ example: 'jhon@gmail.com' })
  email: string;
}

export class SignUpResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Jhon' })
  username: string;

  @ApiProperty({
    example: '$2b$10$R0Ncn.qde1JqTCI1dcaTi.b6TTqXygUn3zyBqi0oAWoEzucexbo9a',
  })
  password: string;

  @ApiProperty({
    example: 'jhon@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: '2023-05-02T10:06:34.575Z',
  })
  updatedAt: string;

  @ApiProperty({
    example: '2023-05-02T10:06:34.575Z',
  })
  createdAt: string;
}
