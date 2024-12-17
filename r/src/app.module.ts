import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DeliveryAgentModule } from './delivery-agent/delivery-agent.module';

@Module({
  imports: [ DeliveryAgentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
