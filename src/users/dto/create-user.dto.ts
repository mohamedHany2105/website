import { IsEmail, IsString, MinLength, IsInt, IsOptional } from 'class-validator'
export class CreateUserDto {
    
    @IsEmail()
    email: string;
    @IsString()
    password: string
    @IsString()
  
    Role: string ;
}
