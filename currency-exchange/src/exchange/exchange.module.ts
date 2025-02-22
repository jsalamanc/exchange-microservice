import { Module } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { ExchangeController } from './exchange.controller';
import { CurrencyService } from '../services/fixer-connection/currency.service';
import { PrismaService } from 'src/services/prisma-client/prisma-client.service';

@Module({
  controllers: [ExchangeController],
  providers: [PrismaService, CurrencyService, ExchangeService],
})
export class ExchangeModule {}
