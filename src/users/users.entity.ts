import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {

    @ObjectIdColumn ()
    _id:string;

    @Column()
    name:string;

    @Column()
    password:string;

    @Column()
    email: string;

    @Column()
    ordersId:string[];

    @Column({ default: false })
    admin:boolean


}