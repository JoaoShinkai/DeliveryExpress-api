import { CreateUserService } from '@modules/user/services/CreateUserService';
import { ListByIdUserService } from '@modules/user/services/ListByIdUserService';
import { ListUserService } from '@modules/user/services/ListUserService';
import { UpdateCartProductsService } from '@modules/user/services/UpdateCartProductsService';
import { UpdateUserService } from '@modules/user/services/UpdateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;

      const createUserService = container.resolve(CreateUserService);

      res.json(await createUserService.execute(data));
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const listUserService = container.resolve(ListUserService);
      res.json(await listUserService.execute());
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async listById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const listByIdUserService = container.resolve(ListByIdUserService);
      res.json(await listByIdUserService.execute(Number(id)));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updateUserService = container.resolve(UpdateUserService);
      res.json(await updateUserService.execute(Number(id), data));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async updateCartProducts(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updateCartProductService = container.resolve(
        UpdateCartProductsService
      );

      res.json(await updateCartProductService.execute(Number(id), data));
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }
}
