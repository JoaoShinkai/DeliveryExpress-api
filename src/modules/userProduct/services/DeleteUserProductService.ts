import { inject, injectable } from 'tsyringe';
import { IUserProductRepository } from '../repositories/IUserProductRepository';

@injectable()
export class DeleteUserProductService {
  constructor(
    @inject('UserProductRepository')
    private userProductRepository: IUserProductRepository
  ) {}

  public async execute(userId: number, id: number): Promise<void> {
    await this.userProductRepository.delete(userId, id);
  }
}
