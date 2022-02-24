import { Report } from 'src/reports/reports.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  OneToMany,
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
  password: string;

  /* 
    1. A function that returns the entity of the other entity
      Goal: this entity will be associated with another entity
      
      Why function? 
      - Because of a JS issue. Circular dependency makes one of the entities undefined. This solved that issue.
      - Function makes it that after everything is initialize we can run the other entity 
    2. a function that is an instance of the other instance that points to the field that makes the relationship possible.
      Why? Due to how typeorm models relationships. See picture in pictures/associations/why-we...
   */
  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

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
