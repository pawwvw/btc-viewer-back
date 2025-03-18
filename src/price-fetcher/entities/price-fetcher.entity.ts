import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PriceFetcher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "float"})
    price: number;

    @CreateDateColumn()
    timestamp: Date;
}
