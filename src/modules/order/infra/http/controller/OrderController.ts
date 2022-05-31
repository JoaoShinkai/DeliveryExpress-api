import { CreateOrderService } from '@modules/order/services/CreateOrderService';
import { ListByIdOrderService } from '@modules/order/services/ListByIdOrderService';
import { ListByUserOrderService } from '@modules/order/services/ListByUserOrderService';
import { ListOrderService } from '@modules/order/services/ListOrderService';
import { UpdateOrderService } from '@modules/order/services/UpdateOrderService';
import { UpdateProductsInOrderService } from '@modules/order/services/UpdateProductsInOrderService';
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

  async list(req: Request, res: Response): Promise<void> {
    try {
      const listOrderService = container.resolve(ListOrderService);

      res.json(await listOrderService.execute());
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async listById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const listByIdOrderService = container.resolve(ListByIdOrderService);
      res.json(await listByIdOrderService.execute(Number(id)));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async listByUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const listByUserOrderService = container.resolve(ListByUserOrderService);

      res.json(await listByUserOrderService.execute(Number(id)));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updateOrderService = container.resolve(UpdateOrderService);

      res.json(await updateOrderService.execute(Number(id), data));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async updateProductsInOrder(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updateProductsInOrderService = container.resolve(
        UpdateProductsInOrderService
      );

      res.json(await updateProductsInOrderService.execute(Number(id), data));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }
}
