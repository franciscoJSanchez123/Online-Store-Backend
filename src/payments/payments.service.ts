import { Injectable } from '@nestjs/common';
import { InjectStripe } from 'nestjs-stripe';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {

    public constructor(@InjectStripe() private readonly stripeClient: Stripe) {}

    createPaymentItem(amount:number){
        return this.stripeClient.paymentIntents.create({
            amount:amount,
            currency:'usd',
            payment_method_types:["card"]
        }
        )
    }

    createCheckout(){
        return this.stripeClient.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
            {
                price_data: {
                currency: 'usd',
                product_data: {
                    name: 'T-shirt',
                },
                unit_amount: 3000,
                },
                quantity: 1,
            },
            ],
            mode: 'payment',
            success_url: 'https://example.com/success',
            cancel_url: 'https://example.com/cancel',
                })
    }
}
