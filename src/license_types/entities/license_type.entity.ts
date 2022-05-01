import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LicenseType {

    @PrimaryGeneratedColumn({type:"int4"})
    id: number;

    @Column({type:"varchar"})
    description: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
