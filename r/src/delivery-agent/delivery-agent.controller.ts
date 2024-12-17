import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { DeliveryAgentService } from './delivery-agent.service';
import { DeliveryAgent } from './delivery-agent.entity';

@Controller('delivery-agent')
export class DeliveryAgentController {
    //agentService: any;
    constructor(private readonly deliveryagentService: DeliveryAgentService) {}

    @Post('add')
    create(@Body() agent: DeliveryAgent):Promise<DeliveryAgent>{
        return this.deliveryagentService.create(agent);
    }

    @Get()
    findAll(): Promise<DeliveryAgent[]> {
        return this.deliveryagentService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<DeliveryAgent> {
        return this.deliveryagentService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: number,@Body()
    updateAgent: Partial<DeliveryAgent>):Promise<DeliveryAgent>
    {
        return this.deliveryagentService.update(id, updateAgent);
    }


   
}
