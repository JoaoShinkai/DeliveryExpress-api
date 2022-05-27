import { CreateOptionAdditionalService } from '@modules/optionAdditional/services/CreateOptionAdditionalService';
import { ListOptionAdditionalService } from '@modules/optionAdditional/services/ListOptionAdditionalService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class OptionAdditionalController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;

      const createOptionAdditionalService = container.resolve(
        CreateOptionAdditionalService
      );

      res.json(await createOptionAdditionalService.execute(data));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const listOptionAdditionalService = container.resolve(
        ListOptionAdditionalService
      );

      res.json(await listOptionAdditionalService.execute());
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }
}
