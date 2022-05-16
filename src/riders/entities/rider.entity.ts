import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rider {

    @PrimaryGeneratedColumn({type:"int4"})
    id: number;

    @Column({type:"int4", unique:true})
    user_id: number;

    @CreateDateColumn({type: "date"})
    created_at: Date;

    @CreateDateColumn({type: "date"})
    updated_at: Date;

    @OneToOne(()=> User,(user)=>user.rider,{eager:true})
    user:User
}
