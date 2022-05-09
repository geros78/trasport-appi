import { City } from "src/city/entities/city.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserAddress {

    @PrimaryGeneratedColumn({type:"int4"})
    id: number;

    @Column({type:"int4"})
    user_id: number;

    @Column({type:"int4"})
    city_id: number;

    @Column()
    address: string;

    @Column()
    description: string;

    @Column()
    zipcode: number;

    @Column()
    geolocation: string;

    @ManyToOne(()=> User,(user)=>user.id,{eager:true})
    user:User;

    @ManyToOne(()=> City,(city)=>city.id, {eager:true})
    city:City;
}
