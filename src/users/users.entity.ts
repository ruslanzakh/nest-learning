import { Entity, Column, ObjectIdColumn, ObjectID, BeforeInsert, OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Task } from '../tasks/tasks.entity';

@Entity()
export class User {
	@ObjectIdColumn()
    _id: ObjectID;

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

	toJSON() {
		return {
			username: this.username,
			id: this._id,
			admin: this.admin,
		};
	}

	static setHashPassword(password: string): Promise<string> {
		return bcrypt.hash(password, 10);
	}


	async comparePassword(attempt: string): Promise<boolean> {
		return await bcrypt.compare(attempt, this.password);
	}

	// toResponseObject(): UserDto {
	// 	const { id, username, admin } = this;
	// 	const responseObject: UserDto = {
	// 		id,
	// 		username,
	// 		admin,
	// 	};

	// 	return responseObject;
	// }
}