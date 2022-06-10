import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IProductDTO } from '../dtos/IProductDTO';
import { IProductRepository } from '../repositories/IProductRepository';

@injectable()
export class ListByIdProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  public async execute(id: number): Promise<IProductDTO> {
    const product = await this.productRepository.findById(id);

    if (product === undefined) {
      throw new AppError("This products doesn't exists");
    }

    return product;
  }
}
