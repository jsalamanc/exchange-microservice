import { Module } from '@nestjs/common';
import { ExchangeServiceController } from './exchange-service.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EXCHANGE_SERVICE } from 'src/config/services';
import { envs } from 'src/config';

@Module({
  controllers: [ExchangeServiceController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: EXCHANGE_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.exchangeServicesHost,
          port: envs.exchangeServicesPort,
        },
      },
    ]),
  ],
})
export class ExchangeServiceModule {}
