import { CreateStoreService } from '@modules/store/services/CreateStoreService';
import { ListStoreService } from '@modules/store/services/ListStoreService';
import { UpdateStoreService } from '@modules/store/services/UpdateStoreService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class StoreController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      const createStoreService = container.resolve(CreateStoreService);

      res.json(await createStoreService.execute(data));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const listStoreService = container.resolve(ListStoreService);
      res.json(await listStoreService.execute());
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updateStoreService = container.resolve(UpdateStoreService);

      res.json(await updateStoreService.execute(Number(id), data));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }
}
