import { Injectable } from '@nestjs/common';

import {UsersService} from './../users/users.service';

import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private usersService:UsersService,
        private jwtService:JwtService
        ){}



    async validateUser(username:string, pass:string): Promise<any>{

        const user= await this.usersService.findUser(username);
        const ispasswordmatch=  bcrypt.compare(user.password,pass);

        if (user && ispasswordmatch){

            const {password,...result}=user;
            console.log("aqui auth service bien")
            return result;

        }
            console.log("aqui auth service mal")
            return null
    }


    async login(user:any){
        console.log("aqui login auth")
        const payload = {username:user.name,sub: user._id, email:user.email, ordersId:user.ordersId, admin:user.admin};
        console.log(payload + " aqui payload en login auth")
        return {
        
            access_token: this.jwtService.sign(payload),
        }
    }

}
