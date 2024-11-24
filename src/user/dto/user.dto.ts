import {
  IsString,
  IsUUID,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsOptional,
} from 'class-validator';

export class UserDto {
  @IsOptional()
  @IsUUID('4', { message: 'The ID must be a valid UUID.' })
  id?: string;

  @IsString({ message: 'The username must be a string.' })
  @IsNotEmpty({ message: 'The username is required.' })
  @MinLength(4, { message: 'The username must be at least 4 characters long.' })
  @MaxLength(20, { message: 'The username must not exceed 20 characters.' })
  username: string;

  @IsString({ message: 'The password must be a string.' })
  @IsNotEmpty({ message: 'The password is required.' })
  @MinLength(5, { message: 'The password must be at least 8 characters long.' })
  @MaxLength(100, { message: 'The password must not exceed 100 characters.' })
  password: string;

  @IsEmail({}, { message: 'The email must be a valid email address.' })
  @IsNotEmpty({ message: 'The email is required.' })
  email: string;
}

export class CreateUserDto {
  @IsString({ message: 'The username must be a string.' })
  @IsNotEmpty({ message: 'The username is required.' })
  @MinLength(4, { message: 'The username must be at least 4 characters long.' })
  @MaxLength(20, { message: 'The username must not exceed 20 characters.' })
  username: string;

  @IsString({ message: 'The password must be a string.' })
  @IsNotEmpty({ message: 'The password is required.' })
  @MinLength(5, { message: 'The password must be at least 5 characters long.' })
  @MaxLength(100, { message: 'The password must not exceed 100 characters.' })
  password: string;

  @IsEmail({}, { message: 'The email must be a valid email address.' })
  @IsNotEmpty({ message: 'The email is required.' })
  email: string;
}
