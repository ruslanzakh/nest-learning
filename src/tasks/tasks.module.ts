import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { tasksProviders } from './tasks.providers';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { UsersModule } from '../users/users.module';

@Module({
	imports: [UsersModule, DatabaseModule],
	providers: [
		...tasksProviders,
		TasksService,
	],
	controllers: [TasksController],
})
export class TasksModule {}