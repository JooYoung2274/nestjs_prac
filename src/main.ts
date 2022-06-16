import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.SERVERPORT);
  await app.listen(port);

  logger.log(`Application running on port ${port}`);
}
bootstrap();
