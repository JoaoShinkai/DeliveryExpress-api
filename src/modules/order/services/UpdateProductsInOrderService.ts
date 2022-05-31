import { inject, injectable } from 'tsyringe';
import { IOrderDTO } from '../dtos/IOrderDTO';
import { IOrderRepository } from '../repositories/IOrderRepository';

@injectable()
export class UpdateProductsInOrderService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository
  ) {}

  public async execute(id: number, data: Partial<IOrderDTO>): Promise<void> {
    await this.orderRepository.updateProductsInOrder(id, data);
  }
}
