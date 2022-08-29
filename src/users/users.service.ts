import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';

import {Users} from './users.entity';
import {CreateUsersDto} from './create-users.dto';

import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private readonly usersDB:Repository<Users>

    ){}

    async create( createUsersDto:CreateUsersDto){
        const hashedPassword= await bcrypt.hash(createUsersDto.password,11);
        const user = await this.usersDB.create({...createUsersDto,password:hashedPassword});
        this.usersDB.save(user);
    }

    async findUser(username:string): Promise<Users>{
        const name=username;
        return await this.usersDB.findOne({name})
    }

    async findUserById(_id:string){
        console.log(_id)
        return await this.usersDB.findOne(_id)
    }

    async updateUserById(id:string,createUsersDto:CreateUsersDto){
        return await this.usersDB.update(id,createUsersDto)
    }


}
