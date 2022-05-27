import { CreateAdditionalService } from '@modules/additional/services/CreateAdditionalService';
import { ListByProductService } from '@modules/additional/services/ListByProductService';
import { UpdateAdditionalService } from '@modules/additional/services/UpdateAdditionalService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class AdditionalController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;

      const createAdditionalService = container.resolve(
        CreateAdditionalService
      );
      res.json(await createAdditionalService.execute(data));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async listByProduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const listByProductService = container.resolve(ListByProductService);

      res.json(await listByProductService.execute(Number(id)));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;
      const updateAdditionalService = container.resolve(
        UpdateAdditionalService
      );

      res.json(await updateAdditionalService.execute(Number(id), data));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }
}
