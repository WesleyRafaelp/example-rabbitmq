import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ClientModule],
  controllers: [AppController],
})
export class AppModule {}
