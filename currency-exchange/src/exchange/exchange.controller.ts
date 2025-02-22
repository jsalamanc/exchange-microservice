import { Controller, Body, Param } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { FindByIdParamDto } from './dto/find-exchange-by-id.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}

  @MessagePattern({ cmd: 'create_exchange' })
  create(@Payload() createExchangeDto: CreateExchangeDto) {
    return this.exchangeService.create(createExchangeDto);
  }
  @MessagePattern({ cmd: 'find_byId' })
  findOne(@Payload() params: FindByIdParamDto) {
    const { id } = params;
    return this.exchangeService.findOne(+id);
  }
}
