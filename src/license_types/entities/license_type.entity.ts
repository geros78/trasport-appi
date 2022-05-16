import { DriverLicense } from "src/driver_licenses/entities/driver_license.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LicenseType {

    @PrimaryGeneratedColumn({type:"int4"})
    id: number;

    @Column({type:"varchar"})
    description: string;

    @CreateDateColumn({type: "date"})
    created_at: Date;

    @CreateDateColumn({type: "date"})
    updated_at: Date;

    @OneToMany(()=> DriverLicense,(driver_licenses)=>driver_licenses.licenseTypes,{eager:true})
    licenses:DriverLicense[];
}
