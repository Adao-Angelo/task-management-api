import { Injectable, NotFoundException } from '@nestjs/common';
import { FindAllParamsDTO, TaskDTO, TaskStatus } from './dto/task.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
  private tasks: TaskDTO[] = [];
  createTask(task: TaskDTO): TaskDTO {
    task.id = uuid();
    task.status = TaskStatus.PENDING;
    this.tasks.push(task);
    return task;
  }
  getAllTasks(params: FindAllParamsDTO): TaskDTO[] {
    return this.tasks.filter((task) => {
      let march: boolean = true;
      if (
        params.title &&
        !task.title.toLowerCase().includes(params.title.toLowerCase())
      ) {
        march = false;
      }
      if (params.status && !task.status.includes(params.status)) {
        march = false;
      }
      return march;
    });
  }
  getTaskById(id: string): TaskDTO | undefined {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      return task;
    }
    throw new NotFoundException(`Task with id: ${id} not found.`);
  }

  updateTask(id: string, task: TaskDTO): TaskDTO | undefined {
    const index = this.tasks.findIndex((t) => t.id === id);

    if (index !== -1) {
      this.tasks[index].id = id;
      this.tasks[index] = task;
      return task;
    }
    throw new NotFoundException(`Task with id: ${id} not found.`);
  }
  deleteTask(id: string): boolean {
    const index = this.tasks.findIndex((task) => task.id === id);

    if (index !== -1) {
      this.tasks.splice(index, 1);
      return true;
    }
    throw new NotFoundException(`Task with id: ${id} not found.`);
  }
}
