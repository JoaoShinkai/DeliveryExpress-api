import { IStoreDTO } from '@modules/store/dtos/IStoreDTO';
import { IStoreRepository } from '@modules/store/repositories/IStoreRepository';
import bcryptjs from 'bcryptjs';
import { getRepository, Repository } from 'typeorm';
import { Store } from '../entities/Store';

export class StoreRepository implements IStoreRepository {
  private repository: Repository<Store>;

  constructor() {
    this.repository = getRepository(Store);
  }

  async create(store: IStoreDTO): Promise<void> {
    await this.repository.save(store);
  }

  async find(): Promise<IStoreDTO[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<IStoreDTO | undefined> {
    return this.repository.findOne(id);
  }

  async findByEmail(email: string): Promise<IStoreDTO | undefined> {
    return this.repository.findOne({ email });
  }

  async update(id: number, data: Partial<IStoreDTO>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcryptjs.genSalt(8);
    return bcryptjs.hashSync(password, salt);
  }
}
