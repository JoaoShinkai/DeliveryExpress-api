import { inject, injectable } from 'tsyringe';
import { IOrderRepository } from '../repositories/IOrderRepository';

interface ITopSellingProductsDTO {
  value: number;
  name: string;
}

@injectable()
export class CountTopSellingProductsService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository
  ) {}

  public async execute(company: number): Promise<ITopSellingProductsDTO[]> {
    return this.orderRepository.countTopSellingProducts(company);
  }
}
