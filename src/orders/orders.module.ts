import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import {Orders} from './orders.entity';
import {UsersModule} from './../users/users.module'

@Module({
  imports:[TypeOrmModule.forFeature([Orders]),UsersModule],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
