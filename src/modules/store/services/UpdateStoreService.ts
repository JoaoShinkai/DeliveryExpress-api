import { inject, injectable } from 'tsyringe';
import { IStoreDTO } from '../dtos/IStoreDTO';
import { IStoreRepository } from '../repositories/IStoreRepository';

@injectable()
export class UpdateStoreService {
  constructor(
    @inject('StoreRepository')
    private storeRepository: IStoreRepository
  ) {}

  public async execute(id: number, data: Partial<IStoreDTO>): Promise<void> {
    await this.storeRepository.update(id, data);
  }
}
