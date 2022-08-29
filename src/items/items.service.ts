import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { Items} from './items.entity';

import {CreateItemDto} from './create-items.dto';


@Injectable()
export class ItemsService {

    constructor(

        @InjectRepository(Items) 
        private readonly itemsDB:Repository<Items>
        
    ){}

    find(selection:String){
        
        switch(selection){
            case 'All':  
                return this.itemsDB.find();

            case 'priceASC':
                return this.itemsDB.find({order:{price:'ASC'}});

            case 'priceDESC':
                return this.itemsDB.find({order:{price:'DESC'}});

            case 'nameASC':
                return this.itemsDB.find({order:{name:'ASC'}});

            case 'nameDESC':
                return this.itemsDB.find({order:{name:'DESC'}});

        }   
    }

    findId(id:string){
        console.log('aqui probando')
        return this.itemsDB.findOne(id)
    }

    deleteId(id:string){
        return this.itemsDB.delete(id)
    }

    create(createItemDto:CreateItemDto){
        return this.itemsDB.save(createItemDto)
    }

    updateId(id:string,createItemDto:CreateItemDto){
        return this.itemsDB.update(id,createItemDto)
    }

   
}
