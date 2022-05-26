import { ICategoryDTO } from '../dtos/ICategoryDTO';

export interface ICategoryRepository {
  create(category: ICategoryDTO): Promise<void>;
  find(): Promise<ICategoryDTO[]>;
  findById(id: number): Promise<ICategoryDTO | undefined>;
  update(id: number, data: Partial<ICategoryDTO>): Promise<void>;
  delete(id: number): Promise<void>;
}
