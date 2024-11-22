import { Body, Controller, Post } from '@nestjs/common';
import { AuthResponseDTO, LoginDTO } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(@Body() loginData: LoginDTO): AuthResponseDTO {
    return this.authService.login(loginData);
  }
}
