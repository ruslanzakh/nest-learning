import { Controller, Get, UseGuards, Post, Request, Body } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { User } from './users/users.entity';

@Controller()
export class AppController {
  constructor(private authService: AuthService, private usersService: UsersService, private readonly appService: AppService) {}

  // @UseGuards(JwtAuthGuard)
  // @Get('/all')
  // getHello(@Request() req): Promise<IUser | undefined> {
  //   return this.usersService.findById(req.user.userId);
  // }
  
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
