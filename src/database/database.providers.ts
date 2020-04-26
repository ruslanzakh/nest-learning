import { createConnection } from 'typeorm';
import { User } from '../users/users.entity';
import { Task } from '../tasks/tasks.entity';
import { DATABASE_CONNECTION, DATABASE_CONFIG } from './constants';

export const databaseProviders = [
	{
		provide: DATABASE_CONNECTION,
		useFactory: async () => await createConnection({
			type: 'mongodb',
			host: DATABASE_CONFIG.HOST,
      		port: DATABASE_CONFIG.PORT,
			database: DATABASE_CONFIG.DATABASE,
			entities: [User, Task],
			logging: true,
			synchronize: true,
		}),
	},
];