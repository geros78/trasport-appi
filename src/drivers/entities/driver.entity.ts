import { DriverLicense } from "src/driver_licenses/entities/driver_license.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Driver {

    @PrimaryGeneratedColumn({type:"int4"})
    id: number;

    @Column({type:"int4", unique: true})
    user_id: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToMany(()=> DriverLicense,(driver_licenses)=>driver_licenses.driver_id,{eager:true})
    driver_licenses:DriverLicense[];

    

}
