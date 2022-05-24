import { CreateUserService } from '@modules/user/services/CreateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const data = req.body;

      const createUserService = container.resolve(CreateUserService);

      res.json(await createUserService.execute(data));
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
