import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findUsers(email: string) {
    // return a list of records or an empty list (list = array)
    // if (email) return this.userRepo.find({ email });
    /* 
      *useParameter, and value
      don't work at the moment
      can allow me to use find instead of queryBuilder
      return this.userRepo.find({
      where: { email: { useParameter: email ? true : false, value: email } },
    });
    */
    console.log('userRepository');
    const users = this.createQueryBuilder('user');
    if (email) users.andWhere('user.email = :email', { email });
    return await users.getMany();
  }
}
