import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { privateEncrypt } from 'crypto';
import { Repository } from 'typeorm';
import { DeliveryAgent } from './delivery-agent.entity';

@Injectable()
export class DeliveryAgentService {
   constructor (
    @InjectRepository(DeliveryAgent)
    private deliveryAgentRepository:Repository<DeliveryAgent>,
   ){}

   create (agent: DeliveryAgent):Promise<DeliveryAgent>{
    return this.deliveryAgentRepository.save(agent);
   }

   async findAll():Promise<DeliveryAgent[]>{
    return await this.deliveryAgentRepository.find();
   }

   async findOne(id: number): Promise<DeliveryAgent> {
    const agent = await this.deliveryAgentRepository.findOneBy({ id });
    if (!agent) {
        throw new NotFoundException(`Delivery agent with ID ${id} not found`);
    }
    return agent;
   }

 async update(id:number,updateAgent:Partial<DeliveryAgent>): Promise<DeliveryAgent>
  {
    const agent = await this.findOne(id);
    Object.assign(agent, updateAgent);
    return await
    this.deliveryAgentRepository.save(agent);
  }
 
}
