export class AuthResponseDTO {
  token: string;
  user: {
    username: string;
    email: string;
  };
  expiresIn: number;
}

import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDTO {
  @IsEmail({}, { message: 'The email must be a valid email address.' })
  @IsNotEmpty({ message: 'The email is required.' })
  email: string;

  @IsString({ message: 'The password must be a string.' })
  @IsNotEmpty({ message: 'The password is required.' })
  @MinLength(5, { message: 'The password must be at least 8 characters long.' })
  password: string;
}
