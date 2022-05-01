import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rider {

    @PrimaryGeneratedColumn({type:"int4"})
    id: number;

    @Column({type:"int4", unique:true})
    user_id: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
