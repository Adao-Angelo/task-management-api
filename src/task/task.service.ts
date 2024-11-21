import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDTO } from './task.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDTO[] = [];
  createTask(task: TaskDTO): TaskDTO {
    this.tasks.push(task);
    return task;
  }
  getAllTasks(): TaskDTO[] {
    return this.tasks;
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
