import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

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
  
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;
  
  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}

