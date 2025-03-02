import { IsNumber, IsString } from 'class-validator';

export class FlowerCreateDto {
  @IsString({
    message: 'Имя не строка',
  })
  name: string;

  @IsString()
  color: string;

  @IsNumber()
  price: string;
}
