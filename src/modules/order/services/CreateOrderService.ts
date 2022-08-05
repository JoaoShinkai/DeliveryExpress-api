import { inject, injectable } from 'tsyringe';
import { IOrderDTO } from '../dtos/IOrderDTO';
import { IOrderRepository } from '../repositories/IOrderRepository';

@injectable()
export class CreateOrderService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository
  ) {}

  public async execute(order: IOrderDTO): Promise<void> {
    console.log(order.products[0].additionals);
    await this.orderRepository.create(order);
  }
}
