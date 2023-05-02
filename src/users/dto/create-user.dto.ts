import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Jhon' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: '3137' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'jhon@gmail.com' })
  @IsNotEmpty()
  readonly email: string;
}
