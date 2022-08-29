export class CreateUsersDto {
    _id?:string;
    name: string;
    password: string;
    email:string;
    ordersId:string[]
    admin:boolean
  }