import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('report')
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  mileage: number;

  @Column()
  longitude: number;

  @Column()
  latitude: number;

  /* when sync is on ManyToOne causes a change
    adds the other relationship key to the database
   */
  @ManyToOne(() => User, (user) => user.reports)
  user: User;
}
