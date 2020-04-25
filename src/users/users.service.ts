import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  async validateUser(username: string): Promise<User> {
    return this.usersRepository.findOne({where: {username}});
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({select: ['username', 'admin', 'password']});
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.password = createUserDto.password;

    return this.usersRepository.save(user);
  }
}