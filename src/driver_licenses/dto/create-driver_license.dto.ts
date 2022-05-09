import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateDriverLicenseDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    driver_id: number;

    @IsNumber()
    @IsNotEmpty()
    license_type_id: number;

    @IsDateString()
    @IsNotEmpty()
    expedition_date: Date;

    @IsDateString()
    @IsNotEmpty()
    expiration_date: Date;

}
