import { CreateProductService } from '@modules/product/services/CreateProductService';
import { ListByIdProductService } from '@modules/product/services/ListByIdProductService';
import { ListProductService } from '@modules/product/services/ListProductService';
import { UpdateProductService } from '@modules/product/services/UpdateProductService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class ProductController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;

      const createProductService = container.resolve(CreateProductService);

      res.json(await createProductService.execute(data));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const listProductService = container.resolve(ListProductService);

      res.json(await listProductService.execute());
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async listById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const listByIdProductService = container.resolve(ListByIdProductService);

      res.json(await listByIdProductService.execute(Number(id)));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updateProductService = container.resolve(UpdateProductService);

      res.json(await updateProductService.execute(Number(id), data));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }
}
