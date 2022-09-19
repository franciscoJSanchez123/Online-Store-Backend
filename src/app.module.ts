import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module'; 



@Module({
  imports: [ TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'url',
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoLoadEntities: true,
      synchronize: true,
  }),
  UsersModule,ItemsModule,AuthModule,RolesModule,OrdersModule,PaymentsModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
