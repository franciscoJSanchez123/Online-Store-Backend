import { Controller, Get, Param, Post, Delete, Body, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';
import { CreateItemDto } from './create-items.dto';

import {ItemsService} from './items.service'

@Controller('items')
export class ItemsController {

    constructor(private itemsService:ItemsService){}

    @Get('list/:selection')
    find(@Param('selection') selection:string){
        console.log('aqui controlador list')
        console.log(selection)
        return this.itemsService.find(selection)
    }

    @Get('/:id')
    findId(@Param('id') id:string){
        return this.itemsService.findId(id)
    }

    @Delete('/:id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    deleteId(@Param()Params){
        return this.itemsService.deleteId(Params.id)
    }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    create(@Body()createItemDto:CreateItemDto){
        return this.itemsService.create(createItemDto)
    }
    
    
    @Put(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    updateId(@Param('id') id:string ,@Body()createItemDto:CreateItemDto){
        return this.itemsService.updateId(id,createItemDto)
    }
}

