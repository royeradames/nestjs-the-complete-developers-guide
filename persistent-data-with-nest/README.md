# Creating new entity

![steps](pictures/creating%20an%20entity/steps.png)
![step one](pictures/creating%20an%20entity/step-one.png)
![step two](pictures/creating%20an%20entity/step-two.png)
![step three](pictures/creating%20an%20entity/step-three.png)

# Migration

![Migrations](pictures/undestanding%20typeorm%20decorators/Screen%20Shot%202022-02-23%20at%205.34.43%20AM.png)

Immigration is a very carefully designed little piece of code that somehow changes the structure of our database. So this might rename a column. It might change the type of data in a column, I might add, or remove a column it might even add or remove a brand new table.

`synchronize: true` makes the decorators do the migrations automatically

![what-the-decorators-do-in-synchronize-true](pictures/undestanding%20typeorm%20decorators/what-the-decorators-do-in-synchronize-true.png)

# options

There is 3 or more ways to do things in typeorm.

![options](pictures/typeorm%20options/options.png)

save(entity) and remove(entity) run entity hooks
insert(Data), update(Data), delete(id) don't run entity hooks

Running entity hooks cost doing 2 trips to the database. Requires getting the current database data of the field then using the method.
Only doing 1 trip to the database doesn't allow entity hooks to run. It only works directly with the database.

# Removing sensitive data from the response

## NestJS approach

@Exclude() for field in entity
![entity](pictures/excluding%20response%20properties/entity.png)

@UseInterceptors(ClassSerializerInterceptor) in route
![controller](pictures/excluding%20response%20properties/controller.png)

# Migration

We need different settings in the dev, testing, production, and CLI environments.

## omgconfig.json and ormconfig.yaml file 
are not valid because they don't let you script the migration.

## Environment variables 
It works for dev and testing.
doesn't work for production. 
  Typeorm requires variables with specific names.
  Our provider will have its own env variables and there is no easy way to redict them.

## ormconfig.ts file
Not an option becaues Nestjs compiles TS into JS and it breaks 

## ormconfig.js file
Works for dev.
- need to load .js files

Fails in test
ts-jest expects .ts not .js files
Solution: use env variables to know what . file to load