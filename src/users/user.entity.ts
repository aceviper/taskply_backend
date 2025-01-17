import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name : 'user'
})
export class User{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    email: string;
    @Column()
    age: number;
    @Column()
    password: string;
    @Column()
    username : string;
    @Column()
    del : number;
}