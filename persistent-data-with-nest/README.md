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