import { CreateCategoryService } from '@modules/category/services/CreateCategoryService';
import { ListCategoryByIdService } from '@modules/category/services/ListCategoryByIdService';
import { ListCategoryByStoreService } from '@modules/category/services/ListCategoryByStoreService';
import { ListCategoryService } from '@modules/category/services/ListCategoryService';
import { UpdateCategoryService } from '@modules/category/services/UpdateCategoryService';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

export class CategoryController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = req.body;
      const createCategoryService = container.resolve(CreateCategoryService);

      res.json(await createCategoryService.execute(data));
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const listCategoryService = container.resolve(ListCategoryService);

      res.json(await listCategoryService.execute());
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
      const { id } = req.params;
      const listCategoryByStoreService = container.resolve(
        ListCategoryByStoreService
      );

      res.json(await listCategoryByStoreService.execute(Number(id)));
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
      const listCategoryByIdService = container.resolve(
        ListCategoryByIdService
      );

      res.json(await listCategoryByIdService.execute(Number(id)));
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updateCategoryService = container.resolve(UpdateCategoryService);

      res.json(await updateCategoryService.execute(Number(id), data));
    } catch (error) {
      next(error);
    }
  }
}
