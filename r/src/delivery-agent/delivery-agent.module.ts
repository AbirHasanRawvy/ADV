import { Module } from '@nestjs/common';
import { DeliveryAgentService } from './delivery-agent.service';
import { DeliveryAgentController } from './delivery-agent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryAgent } from './delivery-agent.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345678',
    database: 'QuadraCart',
    entities: [DeliveryAgent,
    ],
    synchronize: true,
  }),TypeOrmModule.forFeature([DeliveryAgent])],


  providers: [DeliveryAgentService],
  controllers: [DeliveryAgentController]
})
export class DeliveryAgentModule {}
