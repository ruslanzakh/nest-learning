import {
	Entity,
	Column,
	ObjectIdColumn,
	ObjectID,
	ManyToOne,
} from 'typeorm';
import { User } from '../users/users.entity';

@Entity()
export class Task {
	@ObjectIdColumn()
	id: ObjectID;

	@Column('varchar')
	title: string;

	@Column('varchar', {nullable: true})
	description: string | null;

	@Column()
	checked: boolean;

	@ManyToOne(type => User, user => user.tasks)
	user: User;
}