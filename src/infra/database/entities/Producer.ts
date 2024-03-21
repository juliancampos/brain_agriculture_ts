import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

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
  
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;
  
  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date
}
