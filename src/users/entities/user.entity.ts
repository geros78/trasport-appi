import { Driver } from "src/drivers/entities/driver.entity";
import { Rider } from "src/riders/entities/rider.entity";
import { UserAddress } from "src/user_address/entities/user_address.entity";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @CreateDateColumn({type: "date"})
    created_at: Date;

    @CreateDateColumn({type: "date"})
    updated_at: Date;

    @OneToOne(()=> Rider,(rider)=>rider.user)
    rider:Rider;

    @OneToMany(()=> UserAddress,(user_adress)=>user_adress.user,{eager:true})
    userAddress:UserAddress[];

    @OneToOne(()=> Driver,(drivers)=>drivers.user,{eager:true})
    drivers:Driver;
}
