import { inject, injectable } from 'tsyringe';
import { IOrderDTO } from '../dtos/IOrderDTO';
import { IOrderRepository } from '../repositories/IOrderRepository';

@injectable()
export class ListOrderService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository
  ) {}

  public async execute(): Promise<IOrderDTO[]> {
    return this.orderRepository.find();
  }
}
