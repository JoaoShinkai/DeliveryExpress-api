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
    const createdOrder = this.repository.create(data);
    await this.repository.save(createdOrder);
  }

  async find(): Promise<IOrderDTO[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<IOrderDTO | undefined> {
    return this.repository.findOne(id, {
      relations: ['user', 'store', 'products']
    });
  }

  async findByUser(userId: number): Promise<IOrderDTO[]> {
    return this.repository.find({ userId });
  }

  async update(id: number, data: Partial<IOrderDTO>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
