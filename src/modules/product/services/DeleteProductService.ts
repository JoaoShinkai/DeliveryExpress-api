import { inject, injectable } from 'tsyringe';
import { IProductRepository } from '../repositories/IProductRepository';

@injectable()
export class DeleteProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  public async execute(id: number): Promise<void> {
    return this.productRepository.delete(id);
  }
}
