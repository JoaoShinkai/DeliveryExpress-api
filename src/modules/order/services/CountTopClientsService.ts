import { inject, injectable } from 'tsyringe';
import { IOrderRepository } from '../repositories/IOrderRepository';

interface ITopClientsDTO {
  ordersQuantity: number;
  userId: number;
  name: string;
}

@injectable()
export class CountTopClientsService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository
  ) {}

  public async execute(company: number): Promise<ITopClientsDTO[]> {
    return this.orderRepository.countTopClients(company);
  }
}
