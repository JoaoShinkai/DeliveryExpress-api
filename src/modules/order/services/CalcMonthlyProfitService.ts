import { inject, injectable } from 'tsyringe';
import { IOrderRepository } from '../repositories/IOrderRepository';

interface IMonthlyProfitDTO {
  numberMonth: number;
  amount: number;
  month: string;
  year: string;
}

@injectable()
export class CalcMonthlyProfitService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository
  ) {}

  public async execute(company: number): Promise<IMonthlyProfitDTO[]> {
    return this.orderRepository.calcMonthlyProfit(company);
  }
}
