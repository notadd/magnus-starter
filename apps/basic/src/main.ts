/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/
import { FastifyAdapter } from '@nestjs/platform-fastify';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3333;
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: 'magnus',
      protoPath: join(__dirname, './assets/magnus/magnus.proto')
    }
  });
  await app.startAllMicroservicesAsync();
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap().catch(e => {
  console.log(e);
});
