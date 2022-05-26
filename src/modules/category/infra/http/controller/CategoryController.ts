import { CreateCategoryService } from '@modules/category/services/CreateCategoryService';
import { ListCategoryByStoreService } from '@modules/category/services/ListCategoryByStoreService';
import { ListCategoryService } from '@modules/category/services/ListCategoryService';
import { UpdateCategoryService } from '@modules/category/services/UpdateCategoryService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class CategoryController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      const createCategoryService = container.resolve(CreateCategoryService);

      res.json(await createCategoryService.execute(data));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const listCategoryService = container.resolve(ListCategoryService);

      res.json(await listCategoryService.execute());
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async listByStore(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const listCategoryByStoreService = container.resolve(
        ListCategoryByStoreService
      );

      res.json(await listCategoryByStoreService.execute(Number(id)));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updateCategoryService = container.resolve(UpdateCategoryService);

      res.json(await updateCategoryService.execute(Number(id), data));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }
}
