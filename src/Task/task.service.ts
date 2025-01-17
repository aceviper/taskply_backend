import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./task.Entity";
import { Repository } from "typeorm";

@Injectable()
export class TaskServices{

constructor( @InjectRepository(Task) private readonly taskRepository : Repository<Task>){}

async Create(TaskDto: Task) {

  const task = await this.getOne(TaskDto.task_title)

  if (!task){

    console.log("::::::::::CREATING TASK");
    

    try {

      TaskDto.del = 0;
  
      const task = this.taskRepository.create(TaskDto);
  
      const savedTask = await this.taskRepository.save(task);
  
      return savedTask;
  
    } catch (error) {
  
      console.error("Error while creating task:", error);
  
      throw new Error("Could not create task");
    }
    
  }else{

    console.log("::::::::::::::: TASK ALREADY EXIST UPDATING......");
    
    Object.assign(Task, TaskDto);

    const savedTask = await this.taskRepository.save(task);
  
    return savedTask;
  }

}

async getAllTask() {
  const del = 0;
  console.log("Fetching tasks with del =", del);

  try {
    const tasks = await this.taskRepository.find({ where: { del } });
    console.log("Fetched tasks:", tasks);
    return tasks;

  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; 
  }
}

getOne( task_title: string) {
    return this.taskRepository.findOne({ where: { task_title } });
}
  


async update(task_title: string, updateUserDto: Task) {
        
    const user = await this.getOne(task_title)
    
    if (!user) {
      throw new NotFoundException(`task with ID ${user.task_title} not found`);
    }
    
        Object.assign(user, updateUserDto);
        return this.taskRepository.save(user);
}
    

async delete(task_title: string) {
  const user = await this.getOne(task_title)

    if (!user) {
      throw new NotFoundException(`Task with ID ${task_title} not found`);
    }

    await this.taskRepository.delete(task_title); 
    return `Task with ID ${task_title} successfully deleted.`;
}

}