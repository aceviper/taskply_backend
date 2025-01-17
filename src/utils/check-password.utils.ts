import { loginDto } from "src/dtos/login.dto";
import { userService } from "src/users/user.service";

export class checkPassword{
    constructor(private readonly userservice : userService ){}

    async checkPass(request: loginDto): Promise<boolean> {
        const { username, password } = request;
    
        try {
            const user = await this.userservice.findUserByPasswd(password, username);
    
            if (!user) {
                console.error('Invalid credentials');
                return false;
            }

            console.log('User authenticated successfully');
            return true;
            
        } catch (error) {
            console.error('Error during authentication:', error);
            return false;
        }
    }
    
}