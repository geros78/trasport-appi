import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
