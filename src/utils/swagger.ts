import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
	const options = new DocumentBuilder()
			.setTitle('Learning example')
			.setDescription('The Task API description')
			.setVersion('1.0')
			.addTag('tasks')
			.build();
			
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api', app, document);
}