import { Module } from '@nestjs/common';
import { ExchangeModule } from './exchange/exchange.module';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { envs } from './config';

@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        stores: await redisStore({
          socket: {
            host: envs.redisHost,
            port: envs.redisPort,
          },
          ttl: 600,
        }),
      }),
    }),
    ExchangeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
