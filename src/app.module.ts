import { Module } from '@nestjs/common';

import { FlowersModule } from './flowers/flowers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [FlowersModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
