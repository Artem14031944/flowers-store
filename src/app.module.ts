import { Module } from '@nestjs/common';
import { FlowersModule } from './flowers/flowers.module';
import { ConfigModule } from '@nestjs/config';
import { MicroserviceModule } from './microservice/microservice.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FlowersModule,
    MicroserviceModule,
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 8877,
        },
      },
    ]),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
