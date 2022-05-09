import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateRiderDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;
    
    @IsNumber()
    @IsNotEmpty()
    user_id: number;


}
