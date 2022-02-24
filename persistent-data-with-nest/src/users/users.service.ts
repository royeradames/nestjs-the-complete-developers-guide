import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  /* 
  : Repository<User>
  type is a repository that is going to handle users 

  @InjectRepository(User)
  aid to repository
  tells repository system that we need User
    Repository<User> is a generics
    it doesn't play nicely with generics 
    @InjectRepository(User) fixes this
  */
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  create(email: string, password: string) {
    /* see typeorm entity methods image */
    const user = this.userRepo.create({ email, password });
    /* 
      at the moment you can pass down the create { email, password } into save and it will work just fine 
      Note: validation through the entity is possible.
      avoid so that entity hooks run
    */
    return this.userRepo.save(user);
  }

  async findOne(id: number) {
    // return one record or null
    const user = await this.userRepo.findOne(id);
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }
  find(email?: string) {
    // return a list of records or an empty list (list = array)
    if (email) return this.userRepo.find({ email });
    // return this.userRepo.find({
    //   where: { email: { useParameter: email, value: email } },
    // });
    return this.userRepo.find();
  }
  /* 
    Partial 
    - ts include code 
    - makes all types optional
    - none selected can also be ok
  */
  async update(id: number, attrs: Partial<User>) {
    /* using save to be able to run entity hooks will require 2 trips to the database
      one to get the current data from the db and 
      the last one to update the data row
     */
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException(`User ${id} not found`);

    /* Overwrite all of attrs properties with user */
    Object.assign(user, attrs);

    /* save works with an entity */
    return this.userRepo.save(user);
  }
  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException(`User ${id} not found`);

    /* remove works with entity */
    return this.userRepo.remove(user);
  }
}
