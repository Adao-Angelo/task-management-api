import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthResponseDTO, LoginDTO } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

import { compareSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private jwtTimeExpiration: number = this.configService.get<number>(
    'JWT_EXPIRATION_TIME',
  );
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
  login({ password, email }: LoginDTO): AuthResponseDTO {
    const user = this.userService.findByEmail(email);
    if (!user || !compareSync(password, user.password)) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    return {
      user: {
        username: user.username,
        email: user.email,
      },
      token,
      expiresIn: this.jwtTimeExpiration,
    };
  }
}
