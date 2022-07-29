import { inject, injectable } from 'tsyringe';
import { IUserProductDTO } from '../dtos/IUserProductDTO';
import { IUserProductRepository } from '../repositories/IUserProductRepository';

@injectable()
export class CreateUserProductService {
  constructor(
    @inject('UserProductRepository')
    private userProductRepository: IUserProductRepository
  ) {}

  public async execute(data: IUserProductDTO): Promise<void> {
    await this.userProductRepository.create(data);
  }
}
