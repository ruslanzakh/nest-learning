import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn, ObjectID, BeforeInsert } from 'typeorm';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
	@ObjectIdColumn()
    id: ObjectID;

	@Column('varchar', { unique: true })
	username: string;

	@Column('varchar')
	password: string;

	@Column()
	admin: boolean;

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