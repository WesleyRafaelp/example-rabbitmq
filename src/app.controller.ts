import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {

  @MessagePattern('mensagem')
  getNotifications(@Payload() data) {
    console.log('Consumer: ', data)
  }
}
