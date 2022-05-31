import { inject, injectable } from 'tsyringe';
import { IOrderDTO } from '../dtos/IOrderDTO';
import { IOrderRepository } from '../repositories/IOrderRepository';

@injectable()
export class ListByUserOrderService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository
  ) {}

  public async execute(userId: number): Promise<IOrderDTO[]> {
    return this.orderRepository.findByUser(userId);
  }
}
