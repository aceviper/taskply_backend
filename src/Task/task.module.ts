import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./task.Entity";
import { taskController } from "./task.controller";
import { TaskServices } from "./task.service";

@Module({
    imports : [ TypeOrmModule.forFeature([Task])],
    controllers : [ taskController ],
    providers : [ TaskServices]
})
export class TaskModule{

}