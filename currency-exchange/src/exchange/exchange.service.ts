import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { CurrencyService } from '../services/fixer-connection/currency.service';
import { PrismaService } from 'src/services/prisma-client/prisma-client.service';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class ExchangeService {
  private readonly logger = new Logger('ExchangeService');

  constructor(
    private readonly prisma: PrismaService,
    private readonly currencyService: CurrencyService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async create(createExchangeDto: CreateExchangeDto) {
    /**
     * Desestructuramos el body
     */
    const { from_currency, to_currency, amount } = createExchangeDto;
    /**
     * Servicio para realizar la conversion de moneda
     */
    const { amount_exchanged } = await this.currencyService.convertCurrency(
      from_currency,
      to_currency,
      amount,
    );
    this.logger.debug('Conversion exitosa', amount_exchanged);
    /**
     * Guardamos el registro en la base de datos
     */
    await this.prisma.exchange.create({
      data: {
        from_currency,
        to_currency,
        amount,
        amount_exchanged,
      },
    });
    this.logger.debug('Consulta almacenada en la bases de datos');
    return { amount_exchanged, to_currency };
  }

  async findOne(id: number) {
    try {
      /**
       * Consultamos en la cache
       */
      const dataCached = await this.cacheManager.get(`${id}`);
      if (dataCached) {
        this.logger.debug('Consulta desde la cache', dataCached);
        return { data: dataCached };
      }
      /**
       * Consultamos por id
       */
      const data = await this.prisma.exchange.findUnique({ where: { id } });
      if (!data) return { data: {}, message: 'No hay registros' };
      /**
       * Guardamos en la cache
       */
      await this.cacheManager.set(`${id}`, data);
      return { data };
    } catch (error) {
      this.logger.log(error);
      throw new HttpException(
        'Error al buscar el registro en la base de datos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
