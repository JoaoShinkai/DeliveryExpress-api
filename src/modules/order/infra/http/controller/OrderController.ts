import { CreateOrderService } from '@modules/order/services/CreateOrderService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class OrderController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;

      const createOrderService = container.resolve(CreateOrderService);

      res.json(await createOrderService.execute(data));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }
}
