import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ItemsModule } from './items/items.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { OrdersModule } from './orders/orders.module';
import { RolesModule } from './roles/roles.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [ItemsModule, TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://Ferreservica2020:fjJrGaSA959190@cluster0.h0rkb.mongodb.net/Ferreservica?retryWrites=true&w=majority',
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoLoadEntities: true,
      synchronize: true,
  }),
   AuthModule, UsersModule, ChatModule, OrdersModule, RolesModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
