import { inject, injectable } from 'tsyringe';
import { IProductDTO } from '../dtos/IProductDTO';
import { IProductRepository } from '../repositories/IProductRepository';

@injectable()
export class UpdateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  public async execute(id: number, data: Partial<IProductDTO>): Promise<void> {
    await this.productRepository.update(id, data);
  }
}
