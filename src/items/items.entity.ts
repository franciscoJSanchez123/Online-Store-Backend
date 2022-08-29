import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Items {

    @ObjectIdColumn ()
    _id:string;

    @Column()
    name:string;

    @Column()
    img:string;

    @Column()
    description:string;

    @Column({ default: true })
    isActive: boolean;

    @Column()
    price:number

    @Column()
    imgsUrls:string[]
}