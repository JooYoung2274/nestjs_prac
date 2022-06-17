import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(username: string, hashedPassword: string): Promise<void> {
    const user = this.create({ username, password: hashedPassword });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async findUserByUsername(username: string): Promise<User> {
    const result = await this.findOne(username);
    return result;
  }
}

// repository layer에서 DB에 접근하는 모든 쿼리를 결정하는게 맞는건지?
// => 솔직히 정답은 모르겠지만, 개인적으로는 DB에 접근하는 모든 쿼리는 repository layer에 존재해야 한다고 생각함.
// => 이유는 여러가지가 있겠지만, service layer에 쿼리가 존재하게 되면 테스트 코드는 어떻게 작성해야 할지 생각이 안남.
