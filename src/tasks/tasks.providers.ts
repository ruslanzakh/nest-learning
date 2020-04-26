import { Connection } from 'typeorm';
import { Task } from './tasks.entity';
import { TASK_REPOSITORY } from './constants';
import { DATABASE_CONNECTION } from '../database/constants';

export const tasksProviders = [
	{
		provide: TASK_REPOSITORY,
		useFactory: (connection: Connection) => connection.getRepository(Task),
		inject: [DATABASE_CONNECTION],
	},
];