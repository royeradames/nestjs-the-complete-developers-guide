import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Reports } from './reports/reports.entity';

@Module({
  imports: [
    /* setup typeOrm to share db connection to other modules */
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      /* Connect the entity to the root connection (in app module) */
      entities: [User, Reports],
      /* for handling the migrations base on the current entity files
       * deletes and updates columns on the fly
       * use in dev but not in prod
       */
      synchronize: true,
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
