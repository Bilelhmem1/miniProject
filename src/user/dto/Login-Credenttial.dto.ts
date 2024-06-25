import { IsEmail, IsNotEmpty } from "class-validator";


export class LoginCredenttialDtio{

    @IsNotEmpty()
    @IsEmail()
    email : string;
    @IsNotEmpty()
    password: string;

}