import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
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
