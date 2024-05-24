import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { setupSwagger } from './config/swagger.config';

async function bootstrap() {
  // App
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
    rawBody: true,
  });

  // Port
  const PORT = process.env.PORT;

  // Documentation
  if (process.env.NODE_ENV === 'development') {
    setupSwagger(app);
  }

  await app.listen(PORT);
}
bootstrap();
