import { IUserProductDTO } from '../dtos/IUserProductDTO';

export interface IUserProductRepository {
  create(data: IUserProductDTO): Promise<void>;
  deleteByUser(userId: number): Promise<void>;
  list(userId: number): Promise<IUserProductDTO[]>;
}
