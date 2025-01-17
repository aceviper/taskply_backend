import { IsString, IsOptional, IsEmail } from 'class-validator';

export class loginDto {
  
  @IsString()
  username : string;

  @IsEmail()
  password: string;
}
