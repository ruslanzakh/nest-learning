import { ObjectID } from "typeorm";

export class UserDto {
	id: ObjectID;
	username: string;
	admin: boolean;
}