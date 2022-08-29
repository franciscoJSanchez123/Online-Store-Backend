import { Controller, Get, Param, Post, Delete, Body, Put } from '@nestjs/common';
import { CreateOrderDto } from './create-orders.dto';

import {OrdersService} from './orders.service'

@Controller('orders')
export class OrdersController {

    constructor(private ordersService:OrdersService){}

    @Get('/:id')
    findOrderById(@Param('id')id:string){
        return this.ordersService.findOrderById(id)
    }

    @Post()
    createOrder(@Body()createOrderDto:CreateOrderDto){
        console.log("hola!!")
        return this.ordersService.createOrder(createOrderDto)
    }
}
