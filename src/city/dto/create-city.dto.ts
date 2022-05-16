import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCityDto {
    

    @IsNumber()
    @IsNotEmpty()
    country_id: number;

    @IsNotEmpty()
    name: string;
}
