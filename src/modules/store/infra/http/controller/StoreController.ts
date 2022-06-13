import { CreateStoreService } from '@modules/store/services/CreateStoreService';
import { ListStoreByIdService } from '@modules/store/services/ListStoreByIdService';
import { ListStoreService } from '@modules/store/services/ListStoreService';
import { LoginStoreService } from '@modules/store/services/LoginStoreService';
import { UpdateStoreService } from '@modules/store/services/UpdateStoreService';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

export class StoreController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = req.body;
      const createStoreService = container.resolve(CreateStoreService);

      res.json(await createStoreService.execute(data));
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const listStoreService = container.resolve(ListStoreService);
      res.json(await listStoreService.execute());
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
      const listStoreByIdService = container.resolve(ListStoreByIdService);
      res.json(await listStoreByIdService.execute(Number(id)));
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updateStoreService = container.resolve(UpdateStoreService);

      res.json(await updateStoreService.execute(Number(id), data));
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const loginStoreService = container.resolve(LoginStoreService);

      res.json(await loginStoreService.execute(email, password));
    } catch (error) {
      next(error);
    }
  }
}
