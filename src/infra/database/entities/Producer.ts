import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('producers')
export class Producer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;
}