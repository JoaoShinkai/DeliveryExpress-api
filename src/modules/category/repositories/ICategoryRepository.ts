import { ICategoryDTO } from '../dtos/ICategoryDTO';

export interface ICategoryRepository {
  create(category: ICategoryDTO): Promise<void>;
  find(): Promise<ICategoryDTO[]>;
  findById(id: number): Promise<ICategoryDTO | undefined>;
  findByStore(storeId: number): Promise<ICategoryDTO[]>;
  update(id: number, data: Partial<ICategoryDTO>): Promise<void>;
  delete(storeId: number, id: number): Promise<void>;
}
