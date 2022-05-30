import { IOrderDTO } from '../dtos/IOrderDTO';

export interface IOrderRepository {
  create(data: IOrderDTO): Promise<void>;
  find(): Promise<IOrderDTO[]>;
  update(id: number, data: Partial<IOrderDTO>): Promise<void>;
  delete(id: number): Promise<void>;
}
