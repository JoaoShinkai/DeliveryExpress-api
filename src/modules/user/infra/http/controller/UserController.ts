import { CreateUserProductService } from '@modules/user/services/CreateUserProductService';
import { CreateUserService } from '@modules/user/services/CreateUserService';
import { DeleteCartItems } from '@modules/user/services/DeleteCartItems';
import { ListByIdUserService } from '@modules/user/services/ListByIdUserService';
import { ListUserService } from '@modules/user/services/ListUserService';
import { LoginUserService } from '@modules/user/services/LoginUserService';
import { UpdateUserService } from '@modules/user/services/UpdateUserService';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

export class UserController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = req.body;

      const createUserService = container.resolve(CreateUserService);

      res.json(await createUserService.execute(data));
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const listUserService = container.resolve(ListUserService);
      res.json(await listUserService.execute());
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
      const listByIdUserService = container.resolve(ListByIdUserService);
      res.json(await listByIdUserService.execute(Number(id)));
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updateUserService = container.resolve(UpdateUserService);
      res.json(await updateUserService.execute(Number(id), data));
    } catch (error) {
      next(error);
    }
  }

  // async updateCartProducts(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<void> {
  //   try {
  //     const { id } = req.params;
  //     const data = req.body;

  //     const updateCartProductService = container.resolve(
  //       UpdateCartProductsService
  //     );

  //     res.json(await updateCartProductService.execute(Number(id), data));
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password } = req.body;

      const loginUserService = container.resolve(LoginUserService);

      res.json(await loginUserService.execute(email, password));
    } catch (error) {
      next(error);
    }
  }

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
}
