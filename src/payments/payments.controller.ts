import { Body, Controller,Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
    constructor(private paymentService:PaymentsService){}

@Post('create-payment-intent')
createPayment(@Body() amount){
    console.log(amount.amount)
    return this.paymentService.createPaymentItem(amount.amount)
    
}

@Post('create-checkout-session')
createCheckout(@Body() body){
    console.log(body)
    return this.paymentService.createCheckout()
    
}
    
}
