import {
  IsEnum,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
  IsOptional,
  IsDateString,
} from 'class-validator';

export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class TaskDTO {
  @IsUUID('4', { message: 'The ID must be a valid UUID.' })
  @IsOptional()
  id?: string;

  @IsString()
  @MaxLength(40)
  @MinLength(5)
  title: string;

  @MaxLength(200)
  @MinLength(10)
  @IsString()
  description: string;

  @IsString()
  @IsEnum(TaskStatus, {
    message: 'The status must be PENDING, IN_PROGRESS or DONE.',
  })
  @IsOptional()
  status: TaskStatus;

  @IsDateString()
  expirationDate: Date;
}
export class CreateTaskDTO {
  @IsString()
  @MaxLength(40)
  @MinLength(5)
  title: string;

  @MaxLength(200)
  @MinLength(10)
  @IsString()
  description: string;

  @IsString()
  @IsEnum(TaskStatus, {
    message: 'The status must be PENDING, IN_PROGRESS or DONE.',
  })
  @IsOptional()
  status: TaskStatus;

  @IsDateString()
  expirationDate: Date;
}
export interface FindAllParamsDTO {
  title: string;
  status: string;
}
