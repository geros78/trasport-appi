import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
}
