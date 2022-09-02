import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';
import { ICategoryRepository } from '@modules/category/repositories/ICategoryRepository';
import { getRepository, Repository } from 'typeorm';
import { Category } from '../entities/Category';

export class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create(category: ICategoryDTO): Promise<void> {
    await this.repository.save(category);
  }

  async find(): Promise<ICategoryDTO[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<ICategoryDTO | undefined> {
    return this.repository.findOne(id);
  }

  async findByStore(storeId: number): Promise<ICategoryDTO[]> {
    return this.repository.find({
      where: {
        storeId
      },
      relations: ['products']
    });
  }

  async update(id: number, data: Partial<ICategoryDTO>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(storeId: number, id: number): Promise<void> {
    await this.repository.delete({ id, storeId });
  }
}
