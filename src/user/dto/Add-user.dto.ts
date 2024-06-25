import {IsNotEmpty, IsString} from 'class-validator'

export class Adduserdto{
    
    @IsNotEmpty()
    @IsString()
    firstname:string;
    @IsNotEmpty()
    @IsString()
    lastname:string;
    @IsNotEmpty()
    @IsString()
    Role:string;
    @IsNotEmpty()
    @IsString()
    cin:string;
    @IsNotEmpty()
    @IsString()
    tel:string;
    @IsNotEmpty()
    @IsString()
    email:string;
    @IsNotEmpty()
    @IsString()
    password:string;


}