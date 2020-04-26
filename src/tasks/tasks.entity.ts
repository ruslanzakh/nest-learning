import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
} from 'typeorm';
import { User } from '../users/users.entity';

@Entity()
export class Task {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column('varchar')
	title: string;

	@Column('varchar', {nullable: true})
	description: string | null;

	@Column()
	checked: boolean;

	@Column({ nullable: true })
	userId: string;

	@ManyToOne(type => User, user => user.tasks)
	user: User;
}