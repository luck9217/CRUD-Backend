import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";



@Entity()
export class User{


    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstname: string;

    @Column()
    lastname:string;

    @Column({default:true})
    active:Boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}