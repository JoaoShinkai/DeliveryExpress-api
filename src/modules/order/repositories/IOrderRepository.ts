import { IOrderDTO } from '../dtos/IOrderDTO';

interface ITopSellingProductsDTO {
  value: number;
  name: string;
}

interface IMonthlyProfitDTO {
  numberMonth: number;
  amount: number;
  month: string;
}

export interface IOrderRepository {
  create(data: IOrderDTO): Promise<void>;
  find(): Promise<IOrderDTO[]>;
  findById(id: number): Promise<IOrderDTO | undefined>;
  findByUser(userId: number): Promise<IOrderDTO[]>;
  findByStore(storeId: number): Promise<IOrderDTO[]>;
  findByStatus(storeId: number, statusId: number): Promise<IOrderDTO[]>;
  update(id: number, data: Partial<IOrderDTO>): Promise<void>;
  delete(id: number): Promise<void>;
  countTopSellingProducts(company: number): Promise<ITopSellingProductsDTO[]>;
  calcMonthlyProfit(company: number): Promise<IMonthlyProfitDTO[]>;
}
