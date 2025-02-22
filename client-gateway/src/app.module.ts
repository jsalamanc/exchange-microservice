import { Module } from '@nestjs/common';
import { ExchangeServiceModule } from './exchange-service/exchange-service.module';

@Module({
  imports: [ExchangeServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
