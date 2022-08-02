import { inject, injectable } from 'tsyringe';
import { IUserProductDTO } from '../dtos/IUserProductDTO';
import { IUserProductRepository } from '../repositories/IUserProductRepository';

@injectable()
export class ListUserProductService {
  constructor(
    @inject('UserProductRepository')
    private userProductRepository: IUserProductRepository
  ) {}

  public async execute(userId: number): Promise<IUserProductDTO[]> {
    return this.userProductRepository.list(userId);
  }
}
