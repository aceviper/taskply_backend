import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { authController } from "./auth.controller";
import { authService } from "./auth.service";
import { Module } from "@nestjs/common";
import { userService } from "src/users/user.service";


@Module({
    imports : [ TypeOrmModule.forFeature([User])],
    controllers : [ authController ],
    providers : [ authService, userService]
})
export class authModule{

}