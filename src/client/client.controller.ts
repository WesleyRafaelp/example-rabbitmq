import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('client')
export class ClientController {
  constructor(
    @Inject('CONNECTION') private client: ClientProxy,
  ) { }

  @Post()
  async send(@Body() body) {
    this.client.emit('mensagem', body);
    console.log('Producer: ', body);
  }

}
