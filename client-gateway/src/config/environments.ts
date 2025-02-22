import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  EXCHANGE_SERVICES_HOST: string;
  EXCHANGE_SERVICES_PORT: number;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
    EXCHANGE_SERVICES_HOST: joi.string().required(),
    EXCHANGE_SERVICES_PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`validation error: ${error.message}`);
}
const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  exchangeServicesHost: envVars.EXCHANGE_SERVICES_HOST,
  exchangeServicesPort: envVars.EXCHANGE_SERVICES_PORT,
};
