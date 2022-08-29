import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class chatUsers {

    @ObjectIdColumn ()
    _id:string;

    @Column()
    name:string;

    @Column()
    ConversationsId:string[];

    


}