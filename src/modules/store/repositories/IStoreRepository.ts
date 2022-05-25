import { IStoreDTO } from '../dtos/IStoreDTO';

export interface IStoreRepository {
  create(store: IStoreDTO): Promise<void>;
  find(): Promise<IStoreDTO[]>;
  findById(id: number): Promise<IStoreDTO | undefined>;
  findByEmail(email: string): Promise<IStoreDTO | undefined>;
  update(id: number, data: Partial<IStoreDTO>): Promise<void>;
  delete(id: number): Promise<void>;
  hashPassword(password: string): Promise<string>;
}
