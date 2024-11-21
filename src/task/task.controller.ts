import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FindAllParamsDTO, TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post()
  createTask(@Body() task: TaskDTO) {
    return this.taskService.createTask(task);
  }

  @Get()
  getAllTasks(@Query() findAllParams: FindAllParamsDTO) {
    return this.taskService.getAllTasks(findAllParams);
  }
  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }
  @Put(':id')
  updateTask(@Param('id') id: string, @Body() task: TaskDTO) {
    return this.taskService.updateTask(id, task);
  }
  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
