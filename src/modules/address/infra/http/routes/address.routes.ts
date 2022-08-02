import createAddressSchema from '@modules/address/schemas/createAddress.schema';
import updateAddressSchema from '@modules/address/schemas/updateAddress.schema';
import userAuth from '@shared/infra/http/middlewares/userAuth';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import { AddressController } from '../controller/AddressController';

const addressRoutes = Router();
const addressController = new AddressController();

addressRoutes.post(
  '/',
  userAuth,
  [celebrate({ [Segments.BODY]: createAddressSchema })],
  addressController.create
);

addressRoutes.get('/', userAuth, addressController.list);

addressRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateAddressSchema })],
  addressController.update
);

export { addressRoutes };
