import { Driver } from "src/drivers/entities/driver.entity";
import { Rider } from "src/riders/entities/rider.entity";
import { UserAddress } from "src/user_address/entities/user_address.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn({type:"int4"})
    id: number;

    @Column({type:"varchar"})
    name: string;

    @Column({type:"varchar", nullable: true})
    middlename: string;

    @Column({type:"varchar"})
    lastname: string;

    @Column({type:"varchar"})
    email: string;

    @Column({type:"varchar"})
    password: string;

    @Column()
    birthday: Date;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToOne(()=> Rider,(rider)=>rider.user_id,{eager:true})
    rider:Rider;

    @OneToMany(()=> UserAddress,(user_adress)=>user_adress.user_id,{eager:true})
    user_adress:UserAddress[];

    @OneToOne(()=> Driver,(drivers)=>drivers.user_id,{eager:true})
    drivers:Driver;
}
