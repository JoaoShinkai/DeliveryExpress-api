import { CreateStoreService } from '@modules/store/services/CreateStoreService';
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
}
