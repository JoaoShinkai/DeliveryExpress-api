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
    return this.repository.findOne({
      where: {
        id
      },
      relations: ['user', 'store', 'products', 'products.additionals', 'status']
    });
  }

  async findByUser(userId: number): Promise<IOrderDTO[]> {
    return this.repository.find({
      where: {
        userId
      },
      order: {
        sent: 'DESC'
      }
    });
  }

  async findByStore(storeId: number): Promise<IOrderDTO[]> {
    return this.repository.find({ where: { storeId }, relations: ['user'] });
  }

  async findByStatus(storeId: number, statusId: number): Promise<IOrderDTO[]> {
    return this.repository.find({
      where: { storeId, status: statusId }
    });
  }

  async update(id: number, data: Partial<IOrderDTO>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
