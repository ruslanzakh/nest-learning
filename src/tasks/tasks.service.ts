import {
	Injectable,
	Inject,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './tasks.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TASK_REPOSITORY } from './constants';
import { UsersService } from '../users/users.service';

@Injectable()
export class TasksService {

	constructor(
		@Inject(TASK_REPOSITORY)
		private tasksRepository: Repository<Task>,
		private usersService: UsersService,
	) {}

	async findAll(): Promise<Task[]> {
		return this.tasksRepository.find({ relations: ["user"] });
	}

	async create(createUserDto: CreateTaskDto, userId: string): Promise<Task> {
		const user = await this.usersService.findById(userId);
		const task = new Task();
		task.title = createUserDto.title;
		task.description = createUserDto.description;
		task.checked = createUserDto.checked;
		task.user = user;

		return this.tasksRepository.save(task);
	}
}