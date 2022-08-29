import { Controller, Post, Body, Get, UseGuards, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { CreateUsersDto } from './create-users.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){}

    @Post()
    create(@Body()createUsersDto:CreateUsersDto){
        return this.usersService.create(createUsersDto)
    }

    @Get('/:id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    async findUserById(@Param('id') id:string){
        const user:any=await this.usersService.findUserById(id)
        const {password,...result}=user;
        return result;
        
    }
}
