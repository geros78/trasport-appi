import { Country } from "src/countries/entities/country.entity";
import { UserAddress } from "src/user_address/entities/user_address.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class City {

    @PrimaryGeneratedColumn({type:"int4"})
    id: number;

    @Column({type:"int4"})
    country_id: number;

    @Column()
    name: string;
    
    @CreateDateColumn({type: "date"})
    created_at: Date;

    @CreateDateColumn({type: "date"})
    updated_at: Date;

    @OneToMany(()=> UserAddress,(user_address)=>user_address.cities, {eager:true})
    userAddress:UserAddress[];

    @ManyToOne(()=> Country,(countries)=>countries.cities)
    country:Country;
}
