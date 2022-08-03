import { CreateUserProductService } from '@modules/userProduct/services/CreateUserProductService';
import { DeleteCartItems } from '@modules/userProduct/services/DeleteCartItems';
import { DeleteUserProductService } from '@modules/userProduct/services/DeleteUserProductService';
import { ListUserProductService } from '@modules/userProduct/services/ListUserProductService';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

export class UserProductController {
  async addProductToCart(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const data = req.body;

      const { userId: id } = req;

      const service = container.resolve(CreateUserProductService);

      res.json(await service.execute({ ...data, user: { id } }));
    } catch (err) {
      next(err);
    }
  }

  async deleteCartItems(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { userId } = req;

      const service = container.resolve(DeleteCartItems);

      res.json(await service.execute(userId));
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { userId } = req;
      const { id } = req.params;

      const service = container.resolve(DeleteUserProductService);

      res.json(await service.execute(userId, +id));
    } catch (err) {
      next(err);
    }
  }

  async listCartItems(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { userId } = req;

      const service = container.resolve(ListUserProductService);

      res.json(await service.execute(userId));
    } catch (err) {
      next(err);
    }
  }
}
