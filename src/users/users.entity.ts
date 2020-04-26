import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	BeforeInsert,
	OneToMany,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Task } from '../tasks/tasks.entity';

@Entity()
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column('varchar', { unique: true })
	username: string;

	@Column({ select: false })
	password: string;

	@Column({default: false})
	admin: boolean;

	@OneToMany(type => Task, task => task.user)
	tasks: Task[];

	@BeforeInsert()
	async hashPassword() {
		this.password = await User.setHashPassword(this.password);
	}

	static setHashPassword(password: string): Promise<string> {
		return bcrypt.hash(password, 10);
	}

	async comparePassword(attempt: string): Promise<boolean> {
		return await bcrypt.compare(attempt, this.password);
	}
}