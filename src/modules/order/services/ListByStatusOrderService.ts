import { inject, injectable } from 'tsyringe';
import { IOrderDTO } from '../dtos/IOrderDTO';
import { IOrderRepository } from '../repositories/IOrderRepository';

@injectable()
export class ListByStatusOrderService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository
  ) {}

  public async execute(
    storeId: number,
    statusId: number
  ): Promise<IOrderDTO[]> {
    return this.orderRepository.findByStatus(storeId, statusId);
  }
}
