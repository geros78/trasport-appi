import { DriverLicense } from "src/driver_licenses/entities/driver_license.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LicenseType {

    @PrimaryGeneratedColumn({type:"int4"})
    id: number;

    @Column({type:"varchar"})
    description: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToMany(()=> DriverLicense,(driver_licenses)=>driver_licenses.license_type_id,{eager:true})
    driver_licenses:DriverLicense;
}
