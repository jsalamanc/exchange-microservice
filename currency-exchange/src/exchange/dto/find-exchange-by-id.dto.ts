import { Type } from 'class-transformer';
import { IsNumber, IsPositive, Min } from 'class-validator';

export class FindByIdParamDto {
  @IsNumber()
  @IsPositive()
  @Min(1, { message: 'El ID debe ser mayor que 0.' })
  @Type(() => Number)
  id: number;
}
