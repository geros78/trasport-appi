import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserAddressDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;
    
    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @IsNumber()
    @IsNotEmpty()
    city_id: number;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    zipcode: number;

    @IsNotEmpty()
    geolocation: string;
    
}
