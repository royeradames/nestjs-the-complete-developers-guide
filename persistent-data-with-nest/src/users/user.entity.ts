import { Exclude } from 'class-transformer';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
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
  @Exclude() //nestjs solution for not showing your password when returning user entity data
  password: string;

  /* 
  *entity hooks
  run logic inside your entity at various time stages */

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with Id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed user with id', this.id);
  }
}
