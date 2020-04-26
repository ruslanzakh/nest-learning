import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './utils/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	initSwagger(app);
	await app.listen(3000);
	console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
