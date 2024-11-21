import { Body, Controller, Post } from '@nestjs/common';
import { TaskDTO } from './task.dto';

@Controller('task')
export class TaskController {
  @Post()
  createTask(@Body() task: TaskDTO) {
    console.log(task);
    return task;
  }
}
