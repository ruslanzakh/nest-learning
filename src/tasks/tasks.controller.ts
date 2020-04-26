import {
	Body,
	Controller,
	Get,
	Post,
	UseGuards,
	Request,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './tasks.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
	constructor(private readonly tasksService: TasksService) {}

	@Get()
	findAll(): Promise<Task[]> {
		return this.tasksService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Post()
	create(@Body() createUserDto: CreateTaskDto, @Request() req): Promise<Task> {
		return this.tasksService.create(createUserDto, req.user.userId);
	}
}