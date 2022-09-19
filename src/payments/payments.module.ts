import { Module } from '@nestjs/common';
import { StripeModule } from 'nestjs-stripe';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

@Module({
  imports:[StripeModule.forRoot({apiKey:'apikey',apiVersion:'2020-08-27'})],
  controllers: [PaymentsController],
  providers: [PaymentsService]
})
export class PaymentsModule {}
