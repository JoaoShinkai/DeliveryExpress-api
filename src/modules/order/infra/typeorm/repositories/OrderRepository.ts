import { IOrderDTO } from '@modules/order/dtos/IOrderDTO';
import { IOrderRepository } from '@modules/order/repositories/IOrderRepository';
import { getRepository, Repository } from 'typeorm';
import { Order } from '../entities/Order';
import { OrderProduct } from '../entities/OrderProduct';

interface ITopSellingProductsDTO {
  value: number;
  name: string;
}
interface IMonthlyProfitDTO {
  numberMonth: number;
  amount: number;
  month: string;
  year: string;
}

interface ITopClientsDTO {
  ordersQuantity: number;
  userId: number;
  name: string;
}

export class OrderRepository implements IOrderRepository {
  private repository: Repository<Order>;

  private orderProductRepository: Repository<OrderProduct>;

  constructor() {
    this.repository = getRepository(Order);
    this.orderProductRepository = getRepository(OrderProduct);
  }

  async create(data: IOrderDTO): Promise<void> {
    const createdOrder = this.repository.create(data);
    await this.repository.save(createdOrder);
  }

  async find(): Promise<IOrderDTO[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<IOrderDTO | undefined> {
    return this.repository.findOne({
      where: {
        id
      },
      relations: ['user', 'store', 'products', 'products.additionals', 'status']
    });
  }

  async findByUser(userId: number): Promise<IOrderDTO[]> {
    return this.repository.find({
      where: {
        userId
      },
      order: {
        sent: 'DESC'
      }
    });
  }

  async findByStore(storeId: number): Promise<IOrderDTO[]> {
    return this.repository.find({ where: { storeId }, relations: ['user'] });
  }

  async findByStatus(storeId: number, statusId: number): Promise<IOrderDTO[]> {
    return this.repository.find({
      where: { storeId, status: statusId }
    });
  }

  async update(id: number, data: Partial<IOrderDTO>): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async countTopSellingProducts(
    company: number
  ): Promise<ITopSellingProductsDTO[]> {
    return this.orderProductRepository
      .createQueryBuilder('order_product')
      .select('SUM(order_product.quantity)', 'value')
      .addSelect('product.name', 'name')
      .innerJoin(
        'order_product.product',
        'product',
        'product.id = order_product.productId'
      )
      .innerJoin(
        'order_product.order',
        'request',
        'request.id = order_product.orderId and request.status = 4'
      )
      .innerJoin(
        'request.store',
        'store',
        'store.id = request.storeId and store.id = :company',
        {
          company
        }
      )
      .groupBy('productId')
      .orderBy('value', 'DESC')
      .limit(6)
      .getRawMany();
  }

  async calcMonthlyProfit(company: number): Promise<IMonthlyProfitDTO[]> {
    return this.repository
      .createQueryBuilder('order')
      .select('MONTH(order.date)', 'numberMonth')
      .addSelect('SUM(order.amount)', 'amount')
      .addSelect(
        `
        CASE
          WHEN month(order.date) = 1 THEN "Jan"
          WHEN month(order.date) = 2 THEN "Fev"
          WHEN month(order.date) = 3 THEN "Mar"
          WHEN month(order.date) = 4 THEN "Abr"
          WHEN month(order.date) = 5 THEN "Mai"
          WHEN month(order.date) = 6 THEN "Jun"
          WHEN month(order.date) = 7 THEN "Jul"
          WHEN month(order.date) = 8 THEN "Ago"
          WHEN month(order.date) = 9 THEN "Set"
          WHEN month(order.date) = 10 THEN "Out"
          WHEN month(order.date) = 11 THEN "Nov"
          WHEN month(order.date) = 12 THEN "Dez"
      END
      `,
        'month'
      )
      .addSelect('YEAR(order.date)', 'year')
      .innerJoin(
        'order.store',
        'store',
        'store.id = order.storeId and store.id = :company',
        {
          company
        }
      )
      .where('order.status = 4')
      .groupBy('numberMonth')
      .orderBy('order.date', 'DESC')
      .limit(7)
      .getRawMany();
  }

  async countTopClients(company: number): Promise<ITopClientsDTO[]> {
    return this.repository
      .createQueryBuilder('order')
      .select('COUNT(userId)', 'ordersQuantity')
      .addSelect('user.id', 'userId')
      .addSelect('user.name', 'name')
      .innerJoin('order.user', 'user', 'order.userId = user.id')
      .where('order.storeId = :company and order.status = 4', { company })
      .groupBy('userId')
      .orderBy('ordersQuantity', 'DESC')
      .limit(10)
      .getRawMany();
  }
}
