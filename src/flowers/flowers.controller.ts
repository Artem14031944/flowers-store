import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { CreateFlowersDto } from './dto/flowers.dto';
import { ConfigService } from '@nestjs/config';
import { EnumAppMode } from '../types';

@Controller('flowers')
export class FlowersController {
  constructor(
    private readonly flowersService: FlowersService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  findAll() {
    console.log(this.configService.get<EnumAppMode>('MODE'));
    return this.flowersService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateFlowersDto) {
    return this.flowersService.create(dto);
  }
}
