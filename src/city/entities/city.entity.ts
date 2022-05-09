import { Country } from "src/countries/entities/country.entity";
import { UserAddress } from "src/user_address/entities/user_address.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class City {

    @PrimaryGeneratedColumn({type:"int4"})
    id: number;

    @Column({type:"int4"})
    country_id: number;

    @Column()
    name: string;
    
    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToMany(()=> UserAddress,(user_address)=>user_address.city_id, {eager:true})
    user_address:UserAddress[];

    @ManyToOne(()=> Country,(countries)=>countries.id, {eager:true})
    countries:Country;
}
