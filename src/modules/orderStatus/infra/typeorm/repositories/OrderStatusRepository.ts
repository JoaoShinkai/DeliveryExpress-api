import { IOrderStatusDTO } from '@modules/orderStatus/dtos/IOrderStatusDTO';
import { IOrderStatusRepository } from '@modules/orderStatus/repositories/IOrderStatusRepository';
import { getRepository, Repository } from 'typeorm';
import { OrderStatus } from '../entities/OrderStatus';

export class OrderStatusRepository implements IOrderStatusRepository {
  private repository: Repository<OrderStatus>;

  constructor() {
    this.repository = getRepository(OrderStatus);
  }

  async find(id: number): Promise<IOrderStatusDTO | undefined> {
    return this.repository.findOne(id);
  }
}
