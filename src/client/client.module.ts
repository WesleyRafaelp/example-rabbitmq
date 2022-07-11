import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClientController } from './client.controller';

@Module({
    imports: [
        ClientsModule.register([
          {
            name: 'CONNECTION',
            transport: Transport.RMQ,
            options: {
              urls: ['amqp://admin:123456@localhost:5672'],
              queue: 'Fila',
              queueOptions: {
                durable: false
              },
            },
          },
        ]),
      ],
    controllers: [ClientController]
      
})
export class ClientModule {}
