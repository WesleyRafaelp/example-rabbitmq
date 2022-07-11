import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
 
  const app = await NestFactory.create(
    AppModule,
  )

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://admin:123456@localhost:5672'],
      queue: 'Fila',
      queueOptions: {
        durable: false, 
      },
    },
  });

  app.listen(3000)

  await app.startAllMicroservices()

}
bootstrap();
