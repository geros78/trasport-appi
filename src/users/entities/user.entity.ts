import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn({type:"int4"})
    name: string;

    @Column({type:"varchar"})
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
}
