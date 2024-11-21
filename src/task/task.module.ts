import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';

@Module({})
export class TaskModule {
  imports: [];
  controllers: [TaskController];
  exports: [TaskController];
}
