import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository, UpdateDescription } from 'typeorm';


@Injectable()
export class userService{
    constructor(@InjectRepository(User) private readonly userRepository : Repository<User> ){}

async create (dto : User){
    return this.userRepository.save(dto)
}  

getMany(){
    return this.userRepository.find({where: { del : 0}});
}

getOne(id : number){
    return this.userRepository.find({ where: {id}})
}

findUserByPasswd(password : string, username : string){
    console.log("finding pass", password);
    console.log("finding pass",  username);
    
    
    return this.userRepository.findOne({where: {password, username} })
}

async update(id: number, dto : User){
    const user = await this.getOne(id)
    
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    Object.assign(user, dto);
    return this.userRepository.save(user)
}

async delete(id : number){
    const user = await this.getOne(id)
    
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await this.userRepository.delete(id); 
    return `User with ID ${id} successfully deleted.`;
}

}





