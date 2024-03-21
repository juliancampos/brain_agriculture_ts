import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Farm } from "./Farm";

@Entity('producers')
export class Producer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  documentType: string;
  
  @Column('text')
  documentNumber: string;

  @OneToMany(() => Farm, farm => farm.producer)
  farms: Farm[];
  
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;
  
  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date
}
