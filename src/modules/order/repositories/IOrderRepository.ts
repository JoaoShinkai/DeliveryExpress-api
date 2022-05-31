import { IOrderDTO } from '../dtos/IOrderDTO';

export interface IOrderRepository {
  create(data: IOrderDTO): Promise<void>;
  find(): Promise<IOrderDTO[]>;
  findById(id: number): Promise<IOrderDTO | undefined>;
  findByUser(userId: number): Promise<IOrderDTO[]>;
  update(id: number, data: Partial<IOrderDTO>): Promise<void>;
  updateProductsInOrder(id: number, data: Partial<IOrderDTO>): Promise<void>;
  delete(id: number): Promise<void>;
}
