import createAddressSchema from '@modules/address/schemas/createAddress.schema';
import updateAddressSchema from '@modules/address/schemas/updateAddress.schema';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import { AddressController } from '../controller/AddressController';

const addressRoutes = Router();
const addressController = new AddressController();

addressRoutes.post(
  '/',
  [celebrate({ [Segments.BODY]: createAddressSchema })],
  addressController.create
);

addressRoutes.get('/', addressController.list);

addressRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateAddressSchema })],
  addressController.update
);

export { addressRoutes };
