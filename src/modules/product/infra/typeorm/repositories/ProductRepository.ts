import { IProductDTO } from '@modules/product/dtos/IProductDTO';
import { IProductRepository } from '@modules/product/repositories/IProductRepository';
import { getRepository, Repository } from 'typeorm';
import { Product } from '../entities/Product';

export class ProductRepository implements IProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async create(product: IProductDTO): Promise<void> {
    await this.repository.save(product);
  }

  async find(): Promise<IProductDTO[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<IProductDTO | undefined> {
    return this.repository.findOne(id);
  }

  async findByCategory(categoryId: number): Promise<IProductDTO[]> {
    return this.repository.find({ categoryId });
  }

  async update(id: number, data: Partial<IProductDTO>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
