import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';
import {Users} from './../users/users.entity'

@Entity()
export class Orders {

    @ObjectIdColumn ()
    _id:string;

    @Column()
    user:Users;

    @Column()
    items:[];
    
    @Column()
    total:number;

    @Column({ default: "En proceso" })
    status:string

    

    
}