import { CreateProductService } from '@modules/product/services/CreateProductService';
import { ListByCategoryProductService } from '@modules/product/services/ListByCategoryProductService';
import { ListByIdProductService } from '@modules/product/services/ListByIdProductService';
import { ListProductService } from '@modules/product/services/ListProductService';
import { UpdateProductService } from '@modules/product/services/UpdateProductService';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

export class ProductController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = req.body;

      const createProductService = container.resolve(CreateProductService);

      res.json(await createProductService.execute(data));
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const listProductService = container.resolve(ListProductService);

      res.json(await listProductService.execute());
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
      const listByIdProductService = container.resolve(ListByIdProductService);

      res.json(await listByIdProductService.execute(Number(id)));
    } catch (error) {
      next(error);
    }
  }

  async listByCategory(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const listByCategoryProductService = container.resolve(
        ListByCategoryProductService
      );

      res.json(await listByCategoryProductService.execute(Number(id)));
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updateProductService = container.resolve(UpdateProductService);

      res.json(await updateProductService.execute(Number(id), data));
    } catch (error) {
      next(error);
    }
  }
}
