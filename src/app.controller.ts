import { Controller, Get, UseGuards, Post, Request } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { IUser } from './users/users.interface';

@Controller()
export class AppController {
  constructor(private authService: AuthService, private usersService: UsersService, private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@Request() req): Promise<IUser | undefined> {
    return this.usersService.findById(req.user.userId);
  }

  
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
