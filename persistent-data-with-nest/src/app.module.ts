import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './users/user.entity';
// import { Report } from './reports/reports.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    /* setup typeOrm to share db connection to other modules */
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'db.sqlite',
    //   /* Connect the entity to the root connection (in app module) */
    //   entities: [User, Report],
    //   /* for handling the migrations base on the current entity files
    //    * deletes and updates columns on the fly
    //    * use in dev but not in prod
    //    */
    //   synchronize: true,
    // }),
    UsersModule,
    ReportsModule,
  ],
})
export class AppModule {}
