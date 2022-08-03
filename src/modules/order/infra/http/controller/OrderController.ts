import { CreateOrderService } from '@modules/order/services/CreateOrderService';
import { ListByIdOrderService } from '@modules/order/services/ListByIdOrderService';
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
}
