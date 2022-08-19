import { IOrderStatusDTO } from '../dtos/IOrderStatusDTO';

export interface IOrderStatusRepository {
  find(id: number): Promise<IOrderStatusDTO | undefined>;
}
