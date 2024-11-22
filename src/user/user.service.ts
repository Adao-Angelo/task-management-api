import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users: CreateUserDto[] = [
    {
      id: '1',
      username: 'john',
      password: '123456',
      email: 'john@example.com',
    },
    {
      id: '2',
      username: 'jane',
      password: '654321',
      email: 'jane@example.com',
    },
  ];
  create(user: CreateUserDto) {
    return this.users.push(user);
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new NotFoundException(`User with id: ${id} not found.`);
  }

  update(id: string, user: CreateUserDto) {
    const index = this.users.findIndex((t) => t.id === id);

    if (index !== -1) {
      this.users[index].id = id;
      this.users[index] = user;
      return user;
    }
    throw new NotFoundException(`User with id: ${id} not found.`);
  }

  remove(id: string) {
    const index = this.users.findIndex((user) => user.id === id);

    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    throw new NotFoundException(`User with id: ${id} not found.`);
  }
}
