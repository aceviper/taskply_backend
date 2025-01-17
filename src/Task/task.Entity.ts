import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name : 'task'
})
export class Task{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    Description: string;
    @Column()
    task_title: string;
    @Column()
    Status : string;
    @Column()
    Deadline : Date;
    @Column()
    del : number;
}