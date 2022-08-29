import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';
import {chatUsers} from './../chat/chatUsers.entity'

@Entity()
export class conversations {

    @ObjectIdColumn ()
    _id:string;

    @Column()
    user:chatUsers;

    @Column()
    messages:[];
    


    

    
}