import {IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateLicenseTypeDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    description: string;

}
