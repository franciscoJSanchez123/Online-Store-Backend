import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { CreateItemDto } from 'src/items/create-items.dto';
import { Repository} from 'typeorm';

import {Orders} from './../orders/orders.entity';

import {CreateOrderDto} from './create-orders.dto';
import {CreateUsersDto} from './../users/create-users.dto';

import {UsersService} from './../users/users.service'

@Injectable()
export class OrdersService {

    user:CreateUsersDto;
    constructor(

        @InjectRepository(Orders) 
        private readonly ordersDB:Repository<Orders>,
        private usersService:UsersService


    ){}


    async createOrder(createOrderDto:CreateOrderDto){
         const order= this.ordersDB.create(createOrderDto)
         
         this.ordersDB.save(order)
         const userId=order.user._id
         
         this.user= await this.usersService.findUserById(userId);
         
         if(this.user){
            console.log(this.user)
             this.user.ordersId.push(order._id)
             this.usersService.updateUserById(userId,this.user)
         }

    }

    async findOrderById(id:string){
        return await this.ordersDB.findOne(id)
    }
}
