import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCountryDto {


    @IsNotEmpty()
    description: string;

}
