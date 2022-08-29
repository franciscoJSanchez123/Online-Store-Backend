import {Users} from './../users/users.entity'

export class CreateOrderDto {
    orderId?:string;
    user: Users;
    items:[];
    total:number;
    status:string
  }