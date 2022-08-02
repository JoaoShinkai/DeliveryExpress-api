import { inject, injectable } from 'tsyringe';
import { IUserProductRepository } from '../repositories/IUserProductRepository';

@injectable()
export class DeleteCartItems {
  constructor(
    @inject('UserProductRepository')
    private userProductRepository: IUserProductRepository
  ) {}

  public async execute(userId: number): Promise<void> {
    return this.userProductRepository.deleteByUser(userId);
  }
}
