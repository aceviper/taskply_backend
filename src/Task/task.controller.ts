import { Body, Controller, Post, Put, Get, Delete, Param } from "@nestjs/common";
import { TaskServices } from "./task.service";
import { Task } from "./task.Entity";
import { promises } from "dns";
//import { UpdateUserDto } from "src/DTO/update-task.dto";

@Controller("/Task")
export class taskController{
   constructor(private readonly taskServices : TaskServices){}

    @Post("/createTasks")
   async create(@Body() Dto: Task){
    return this.taskServices.Create(Dto)
   }

   @Get("/listOfTask")
  async getAll(): Promise<Task[]> {
   console.log(";;;;;;;;;; Logging from the backend");
   return this.taskServices.getAllTask();
}


   @Get("/findTask")
   async  getOne(task_title: string){
    return this.taskServices.getOne(task_title)
   }

   @Put("/updateTask")
   async  update(@Body()  task_title: string ,Dto: Task){
    return this.taskServices.update(task_title, Dto)
   }

   @Delete("/deleteTask/:tasktitle")
   async delete(@Param('task_title') Dto: Task){
    return this.taskServices.Create(Dto)
   }
}