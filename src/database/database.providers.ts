import { createConnection } from 'typeorm';
import { User } from '../users/users.entity';
import { Task } from '../tasks/tasks.entity';
import { DATABASE_CONNECTION, DATABASE_CONFIG } from './constants';

export const databaseProviders = [
	{
		provide: DATABASE_CONNECTION,
		useFactory: async () => await createConnection({
			type: 'postgres',
			host: DATABASE_CONFIG.HOST,
			port: DATABASE_CONFIG.PORT,
			database: DATABASE_CONFIG.DATABASE,
			username: DATABASE_CONFIG.USERNAME,
			password: DATABASE_CONFIG.PASSWORD,
			entities: [User, Task],
			logging: true,
			synchronize: true,
		}),
	},
];