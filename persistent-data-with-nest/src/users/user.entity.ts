import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
/* 
* Create an entity file, and create a class in it that lists all the properties that your entity will have
The decorators tells typeorm what they are */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
