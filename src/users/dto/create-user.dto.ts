import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty()
    name: string;

    middlename: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsDateString()
    @IsNotEmpty()
    birthday: Date;

    
}
