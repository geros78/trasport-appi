import { City } from "src/city/entities/city.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Country {

    @PrimaryGeneratedColumn({type:"int4"})
    id: number;

    @Column()
    description: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
    
    @OneToMany(()=> City,(city)=>city.country_id, {eager:true})
    city:City[];
}
