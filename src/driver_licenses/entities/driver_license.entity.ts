import { Driver } from "src/drivers/entities/driver.entity";
import { LicenseType } from "src/license_types/entities/license_type.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DriverLicense {

    @PrimaryGeneratedColumn({type:"int4"})
    id: number;

    @Column({type:"int4"})
    driver_id: number;

    @Column({type:"int4"})
    license_type_id: number;

    @Column()
    expedition_date: Date;

    @Column()
    expiration_date: Date;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @ManyToOne(()=> Driver,(drivers)=>drivers.id,{eager:true})
    drivers:Driver;

    @ManyToOne(()=> LicenseType,(license_types)=>license_types.id,{eager:true})
    license_types:LicenseType;
}
