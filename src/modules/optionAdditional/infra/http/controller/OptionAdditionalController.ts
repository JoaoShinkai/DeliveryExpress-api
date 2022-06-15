import { CreateOptionAdditionalService } from '@modules/optionAdditional/services/CreateOptionAdditionalService';
import { ListOptionAdditionalByIdService } from '@modules/optionAdditional/services/ListOptionAdditionalByIdService';
import { ListOptionAdditionalService } from '@modules/optionAdditional/services/ListOptionAdditionalService';
import { UpdateOptionAdditionalService } from '@modules/optionAdditional/services/UpdateOptionAdditionalService';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

export class OptionAdditionalController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = req.body;

      const createOptionAdditionalService = container.resolve(
        CreateOptionAdditionalService
      );

      res.json(await createOptionAdditionalService.execute(data));
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const listOptionAdditionalService = container.resolve(
        ListOptionAdditionalService
      );

      res.json(await listOptionAdditionalService.execute());
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
      const listOptionAdditionalByIdService = container.resolve(
        ListOptionAdditionalByIdService
      );

      res.json(await listOptionAdditionalByIdService.execute(Number(id)));
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;
      const updateOptionAdditionalService = container.resolve(
        UpdateOptionAdditionalService
      );
      res.json(await updateOptionAdditionalService.execute(Number(id), data));
    } catch (error) {
      next(error);
    }
  }
}
