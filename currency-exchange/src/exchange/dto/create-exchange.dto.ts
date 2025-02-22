import { Type } from 'class-transformer';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateExchangeDto {
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  amount: number;
  @IsString()
  from_currency: string;
  @IsString()
  to_currency: string;
}
