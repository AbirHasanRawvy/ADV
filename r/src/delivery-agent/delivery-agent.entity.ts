import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class DeliveryAgent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    mail: string;

    @Column()
    pass: string;

    @Column({length:11})
    phoneNumber: string;
}