import { inject, injectable } from 'tsyringe';
import { IProductDTO } from '../dtos/IProductDTO';
import { IProductRepository } from '../repositories/IProductRepository';

@injectable()
export class ListByCategoryProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  public async execute(categoryId: number): Promise<IProductDTO[]> {
    return this.productRepository.findByCategory(categoryId);
  }
}
