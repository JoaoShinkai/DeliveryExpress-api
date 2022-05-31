import { inject, injectable } from 'tsyringe';
import { IOrderDTO } from '../dtos/IOrderDTO';
import { IOrderRepository } from '../repositories/IOrderRepository';

@injectable()
export class ListByIdOrderService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository
  ) {}

  public async execute(id: number): Promise<IOrderDTO> {
    const order = await this.orderRepository.findById(id);

    if (!order) {
      throw new Error("This order doesn't exists");
    }

    if (order.user) {
      delete order.user.password;
    }
    if (order.store) {
      delete order.store.password;
    }

    return order;
  }
}
