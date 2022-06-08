import { inject, injectable } from 'tsyringe';
import { IStoreDTO } from '../dtos/IStoreDTO';
import { IStoreRepository } from '../repositories/IStoreRepository';

@injectable()
export class ListStoreByIdService {
  constructor(
    @inject('StoreRepository')
    private storeRepository: IStoreRepository
  ) {}

  public async execute(id: number): Promise<IStoreDTO | undefined> {
    return this.storeRepository.findById(id);
  }
}
