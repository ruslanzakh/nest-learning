import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
	@ApiProperty({
		description: 'Login Username',
		type: String,
	})
	username: string;

	@ApiProperty()
	password: string;
}