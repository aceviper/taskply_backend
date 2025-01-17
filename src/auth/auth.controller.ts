import { Body, Controller, Get, Post } from "@nestjs/common";
import { authService } from "./auth.service";
import { User } from "src/users/user.entity";
import { loginDto } from "src/dtos/login.dto";

@Controller("/auth")
export class authController{
   constructor(private readonly authservice : authService){}

   
    @Post("/authenticateUser")
       async authentication (@Body() dto : loginDto) {
        console.log("xxxxxx;;;;;;;;;;" , dto);
        const { username, password } = dto;
        console.log("finding PASS", password);

           return this.authservice.checkPass(dto)
       }
}