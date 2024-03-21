import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Producer } from "./Producer";

@Entity('farms')
export class Farm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;
  
  @Column('text')
  city: string;
  
  @Column('text')
  state: string;
  
  @Column('double precision')
  totalArea: Number;
  
  @Column('double precision')
  productiveArea: number;
  
  @Column('double precision')
  vegetationArea: number;
  
  @Column('text')
  cultivation: string[];

  @ManyToOne(type => Producer, producer => producer.farms)
  producer: Producer;
  
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;
  
  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}

