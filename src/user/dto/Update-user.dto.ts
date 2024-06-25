import {IsNotEmpty, IsOptional, IsString} from 'class-validator'

export class UpdateUserdto{
    
    @IsOptional()
    @IsString()
    firstname:string;
    @IsOptional()
    @IsString()
    lastname:string;
    @IsOptional()
    @IsString()
    Role:string;
    @IsOptional()
    @IsString()
    cin:string;
    @IsOptional()
    @IsString()
    tel:string;
    @IsOptional()
    @IsString()
    email:string;
    @IsOptional()
    @IsString()
    password:string;


}