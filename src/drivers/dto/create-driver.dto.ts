import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateDriverDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;


}
