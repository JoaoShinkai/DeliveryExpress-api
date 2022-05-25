import { inject, injectable } from 'tsyringe';
import { IStoreDTO } from '../dtos/IStoreDTO';
import { IStoreRepository } from '../repositories/IStoreRepository';

@injectable()
export class ListStoreService {
  constructor(
    @inject('StoreRepository')
    private storeRepository: IStoreRepository
  ) {}

  public async execute(): Promise<IStoreDTO[]> {
    return this.storeRepository.find();
  }
}
