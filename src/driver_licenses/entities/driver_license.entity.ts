import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DriverLicense {

    @PrimaryGeneratedColumn({type:"int4"})
    id: number;

    @Column({type:"int4"})
    driver_id: number;

    @Column({type:"int4"})
    license_type: number;

    @Column()
    expedition_date: Date;

    @Column()
    expiration_date: Date;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
