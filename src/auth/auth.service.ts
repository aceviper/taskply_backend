import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { loginDto } from "src/dtos/login.dto";
import { User } from "src/users/user.entity";
import { userService } from "src/users/user.service";
import { Repository } from "typeorm";

@Injectable()
export class authService{
    
    constructor(@InjectRepository(User) private readonly userRepo : Repository<User>,
    private readonly userservice: userService){}

    async checkPass(request: loginDto): Promise<object> {
            const { username, password } = request;
        
            try {

                const user = await this.userservice.findUserByPasswd(password, username);
                console.log(user)
        
                if (!user) {
                    console.error('Invalid credentials');
                    return {'code': 403,
                        'data': ''
                    };
                }
    
                console.log('User authenticated successfully');
                return {'code': 200,
                    'data': user
                };
                
            } catch (error) {
                console.error('Error during authentication:', error);
                return {'code': 1000,
                    'data': ''
                };
            }
        }
}