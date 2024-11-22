import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { v4 as uuidV4 } from 'uuid';
import { hashSync as bcryptHashSync } from 'bcrypt';

@Injectable()
export class UserService {
  private users: UserDto[] = [
    {
      id: 'ae63c6f6-c954-4a41-a4bb-fd7d1111c2e1',
      username: 'John Doe',
      password: '$2b$10$Pvx1L0T/cRdqrUxQcWPRbucjB.Bc9ecL5t0aNh8RlQ7XFWXyag0VG',
      email: 'john.doe@example.com',
    },
  ];
  create(user: UserDto) {
    user.id = uuidV4();
    user.password = bcryptHashSync(user.password, 10);
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

  update(id: string, user: UserDto) {
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
