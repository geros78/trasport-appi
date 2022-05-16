import { DriverLicense } from "src/driver_licenses/entities/driver_license.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Driver {

    @PrimaryGeneratedColumn({type:"int4"})
    id: number;

    @Column({type:"int4", unique: true})
    user_id: number;

    @CreateDateColumn({type: "date"})
    created_at: Date;

    @CreateDateColumn({type: "date"})
    updated_at: Date;

    @OneToMany(()=> DriverLicense,(driver_licenses)=>driver_licenses.drivers,{eager:true})
    licenses:DriverLicense[];

    @OneToOne(()=> User,(user)=>user.drivers)
    user:User;

    

}
