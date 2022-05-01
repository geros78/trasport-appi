import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
