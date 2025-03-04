import { Module } from '@nestjs/common';
import { FlowersGrapghqlResolver } from './flowers-grapghql.resolver';
import { FlowersService } from '../flowers/flowers.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [FlowersGrapghqlResolver, FlowersService, PrismaService],
})
export class FlowersGrapghqlModule {}
