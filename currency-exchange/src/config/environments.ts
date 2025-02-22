import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  DATABASE_URL: string;
  FIXER_URL: string;
  FIXER_API_KEY: string;
  REDIS_HOST: string;
  REDIS_PORT: number;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
    FIXER_URL: joi.string().required(),
    FIXER_API_KEY: joi.string().required(),
    REDIS_HOST: joi.string().required(),
    REDIS_PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`validation error: ${error.message}`);
}
const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  databaseUrl: envVars.DATABASE_URL,
  fixerUrl: envVars.FIXER_URL,
  fixerApiKey: envVars.FIXER_API_KEY,
  redisHost: envVars.REDIS_HOST,
  redisPort: envVars.REDIS_PORT,
};
