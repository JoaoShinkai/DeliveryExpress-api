import { IOrderDTO } from '@modules/order/dtos/IOrderDTO';
import { IOrderRepository } from '@modules/order/repositories/IOrderRepository';
import { getRepository, Repository } from 'typeorm';
import { Order } from '../entities/Order';

export class OrderRepository implements IOrderRepository {
  private repository: Repository<Order>;

  constructor() {
    this.repository = getRepository(Order);
  }

  async create(data: IOrderDTO): Promise<void> {
    await this.repository.save(data);
  }

  async find(): Promise<IOrderDTO[]> {
    return this.repository.find();
  }

  async update(id: number, data: Partial<IOrderDTO>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
