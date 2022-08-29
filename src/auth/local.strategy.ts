import {Strategy} from 'passport-local';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthService} from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

    constructor(private readonly authService:AuthService ){
        super(/*{ usernameField: 'email' }*/);
    }

    validate(username:string,password:string){

        const user= this.authService.validateUser(username,password)

        if(!user){
            
            throw new UnauthorizedException();
        }
            console.log("todo bien local strategy")
            return user;
    }

}