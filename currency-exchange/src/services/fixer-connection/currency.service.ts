import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import axios from 'axios';
import { envs } from '../../config/index';

@Injectable()
export class CurrencyService {
  private readonly API_URL: string;
  private readonly API_KEY: string;
  private readonly logger = new Logger('CurrencyService');

  constructor() {
    this.API_URL = envs.fixerUrl;
    this.API_KEY = envs.fixerApiKey;
  }
  async convertCurrency(from: string, to: string, amount: number) {
    try {
      /**
       * extreaemos la informacion de las monedas
       */
      const response = await axios.get(this.API_URL, {
        params: {
          access_key: this.API_KEY,
        },
      });

      const rates = response.data.rates;

      if (!rates[from] || !rates[to]) {
        throw new HttpException('Moneda no soportada', HttpStatus.BAD_REQUEST);
      }

      const conversionRate = rates[to] / rates[from];
      return { amount_exchanged: Math.round(amount * conversionRate) };
    } catch (error) {
      this.logger.log(error);
      throw new HttpException(
        'Error al obtener las tasas de cambio',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
