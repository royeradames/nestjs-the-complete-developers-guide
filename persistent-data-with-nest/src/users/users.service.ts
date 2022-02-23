import { Injectable } from '@nestjs/common';
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
    */
    return this.userRepo.save(user);
  }

  findOne(id: number) {
    // return one record or null
    return this.userRepo.findOne(id);
  }
  find(email: string) {
    // return a list of records or an empty list (list = array)
    return this.userRepo.find({ email });
  }
  update() {}
  remove() {}
}
