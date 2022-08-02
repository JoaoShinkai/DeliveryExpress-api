import { IUserProductDTO } from '@modules/userProduct/dtos/IUserProductDTO';
import { IUserProductRepository } from '@modules/userProduct/repositories/IUserProductRepository';
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

  async list(userId: number): Promise<IUserProductDTO[]> {
    return this.repository.find({
      where: {
        user: { id: userId }
      },
      relations: [
        'additionals',
        'product',
        'product.category',
        'product.category.store'
      ]
    });
  }
}
