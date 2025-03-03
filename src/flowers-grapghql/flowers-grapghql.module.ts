import { Module } from '@nestjs/common';
import { FlowersGrapghqlResolver } from './flowers-grapghql.resolver';
import { FlowersService } from 'src/flowers/flowers.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [FlowersGrapghqlResolver, FlowersService, PrismaService],
})
export class FlowersGrapghqlModule {}
