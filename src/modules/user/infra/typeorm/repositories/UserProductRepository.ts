import { IUserProductDTO } from '@modules/user/dtos/IUserProductDTO';
import { IUserProductRepository } from '@modules/user/repositories/IUserProductRepository';
import { getRepository, Repository } from 'typeorm';
import { UserProduct } from '../entities/UserProduct';

export class UserProductRepository implements IUserProductRepository {
  private repository: Repository<UserProduct>;

  constructor() {
    this.repository = getRepository(UserProduct);
  }

  async create(data: IUserProductDTO): Promise<void> {
    await this.repository.save(data);
  }

  async deleteByUser(userId: number): Promise<void> {
    await this.repository.delete({ user: { id: userId } });
  }
}
