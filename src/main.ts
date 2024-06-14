import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, {
    abortOnError: false,
    cors: true,
  });

  const swaggerOptions = {
    options: {
      swaggerUiEnabled: true,
      customSiteTitle: 'Xbrain API',
    },
  };

  const config = new DocumentBuilder()
    .setTitle('Xbrain API')
    .setDescription('API para o teste da Xbrain')
    .setVersion('1.0')
    .addTag('xbrain')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, swaggerOptions.options);
  new FastifyAdapter();

  await app.listen(3000);
}
bootstrap();
