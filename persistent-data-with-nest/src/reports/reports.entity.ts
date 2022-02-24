import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reports')
export class Reports {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: Date;

  @Column()
  mileage: number;

  @Column()
  longitude: number;

  @Column()
  latitude: number;
}
