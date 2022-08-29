import { Module } from '@nestjs/common';
import { StripeModule } from 'nestjs-stripe';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

@Module({
  imports:[StripeModule.forRoot({apiKey:'sk_test_51KsX4oBUzx4xxmQHs2liE1s6691aMej7kLhritakx0gfTQkEUU8gx2Qi9l7YjYEqwLkhNyt9BxYD3RNIxxtzPos700hmSwif4a',apiVersion:'2020-08-27'})],
  controllers: [PaymentsController],
  providers: [PaymentsService]
})
export class PaymentsModule {}
