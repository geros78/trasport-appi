import { City } from "src/city/entities/city.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Country {

    @PrimaryGeneratedColumn({type:"int4"})
    id: number;

    @Column()
    description: string;

    @CreateDateColumn({type: "date"})
    created_at: Date;

    @CreateDateColumn({type: "date"})
    updated_at: Date;
    
    @OneToMany(()=> City,(city)=>city.country, {eager:true})
    @JoinColumn({name: 'country_id'}) 
    cities:City[];
}
