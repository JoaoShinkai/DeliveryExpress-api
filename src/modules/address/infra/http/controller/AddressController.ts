import { CreateAddressService } from '@modules/address/services/CreateAddressService';
import { ListAddressService } from '@modules/address/services/ListAddressService';
import { UpdateAddressService } from '@modules/address/services/UpdateAddressService';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

export class AddressController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = req.body;
      const createAddressService = container.resolve(CreateAddressService);

      res.json(await createAddressService.execute(data));
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const listAddressService = container.resolve(ListAddressService);
      res.json(await listAddressService.execute());
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updateAddressService = container.resolve(UpdateAddressService);

      res.json(await updateAddressService.execute(Number(id), data));
    } catch (error) {
      next(error);
    }
  }
}
