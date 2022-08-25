import { CalcMonthlyProfitService } from '@modules/order/services/CalcMonthlyProfitService';
import { CountTopSellingProductsService } from '@modules/order/services/CountTopSellingProductsService';
import { CreateOrderService } from '@modules/order/services/CreateOrderService';
import { ListByIdOrderService } from '@modules/order/services/ListByIdOrderService';
import { ListByStatusOrderService } from '@modules/order/services/ListByStatusOrderService';
import { ListByStoreOrderService } from '@modules/order/services/ListByStoreOrderService';
import { ListByUserOrderService } from '@modules/order/services/ListByUserOrderService';
import { UpdateOrderService } from '@modules/order/services/UpdateOrderService';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

export class OrderController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = req.body;

      const { userId } = req;

      const createOrderService = container.resolve(CreateOrderService);

      res.json(await createOrderService.execute({ ...data, userId }));
    } catch (error) {
      next(error);
    }
  }

  async listById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      const listByIdOrderService = container.resolve(ListByIdOrderService);
      res.json(await listByIdOrderService.execute(Number(id)));
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { userId } = req;
      const listByUserOrderService = container.resolve(ListByUserOrderService);

      res.json(await listByUserOrderService.execute(Number(userId)));
    } catch (error) {
      next(error);
    }
  }

  async listByStore(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { storeId } = req;
      const service = container.resolve(ListByStoreOrderService);

      res.json(await service.execute(+storeId));
    } catch (err) {
      next(err);
    }
  }

  async listByStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { storeId } = req;
      const { id } = req.params;
      const service = container.resolve(ListByStatusOrderService);

      res.json(await service.execute(+storeId, +id));
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updateOrderService = container.resolve(UpdateOrderService);

      res.json(await updateOrderService.execute(Number(id), data));
    } catch (error) {
      next(error);
    }
  }

  async countTopSellingProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { storeId } = req;

      const service = container.resolve(CountTopSellingProductsService);

      res.json(await service.execute(+storeId));
    } catch (error) {
      next(error);
    }
  }

  async calcMonthlyProfit(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { storeId } = req;

      const service = container.resolve(CalcMonthlyProfitService);

      res.json(await service.execute(+storeId));
    } catch (error) {
      next(error);
    }
  }
}
