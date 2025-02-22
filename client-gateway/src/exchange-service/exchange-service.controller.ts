import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { FindByIdParamDto } from './dto/find-exchange.dto';
import { EXCHANGE_SERVICE } from 'src/config/services';
import { ClientProxy } from '@nestjs/microservices';

@Controller('exchange-service')
export class ExchangeServiceController {
  constructor(
    @Inject(EXCHANGE_SERVICE) private readonly exchangeService: ClientProxy,
  ) {}

  @Post()
  create(@Body() createExchangeDto: CreateExchangeDto) {
    return this.exchangeService.send(
      { cmd: 'create_exchange' },
      createExchangeDto,
    );
  }

  @Get(':id')
  findOne(@Param() params: FindByIdParamDto) {
    const { id } = params;
    return this.exchangeService.send({ cmd: 'find_byId' }, { id });
  }
}
