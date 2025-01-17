import { Body, Controller, Post, Get, Put, Delete } from "@nestjs/common";
import { userService } from "./user.service";
import { User } from "./user.entity";
import { checkPassword } from "src/utils/check-password.utils";

@Controller("/User")
export class userController{

    constructor(private readonly userservice : userService){}

    @Post("/createUser")
    async create(@Body() dto : User){
        return this.userservice.create(dto)
    }

    @Get("/listOfUser")
    findMany(){
        return this.userservice.getMany
    }

    @Get("/FindUser")
    findOne(){
        return this.userservice.getOne
    }

    @Put("/UpdateUser")
    async update ( @Body() id : number, dto : User){
        return this.userservice.update(id , dto)
    }    

    @Delete("/deleteUser")
    async delete ( @Body() id : number){
        return this.userservice.delete(id)
    }

    @Get("/authenticateUser")
    async authentication (@Body() dto : User){
        return checkPassword
    }
}