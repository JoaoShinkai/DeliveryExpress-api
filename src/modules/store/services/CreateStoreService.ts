import { inject, injectable } from 'tsyringe';
import { IStoreDTO } from '../dtos/IStoreDTO';
import { IStoreRepository } from '../repositories/IStoreRepository';

@injectable()
export class CreateStoreService {
  constructor(
    @inject('StoreRepository')
    private storeRepository: IStoreRepository
  ) {}

  public async execute(store: IStoreDTO): Promise<void> {
    const emailAlreadyExists = await this.storeRepository.findByEmail(
      store.email
    );

    if (emailAlreadyExists) {
      throw new Error('Email already exists');
    }

    const newStore = store;
    newStore.password = await this.storeRepository.hashPassword(store.password);

    await this.storeRepository.create(newStore);
  }
}
