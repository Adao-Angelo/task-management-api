import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { v4 as uuidV4 } from 'uuid';
import { hashSync as bcryptHashSync } from 'bcrypt';

@Injectable()
export class UserService {
  private users: UserDto[] = [];
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

  findByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
