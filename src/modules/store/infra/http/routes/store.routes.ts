import createStoreSchema from '@modules/store/schemas/createStore.schema';
import updateStoreSchema from '@modules/store/schemas/updateStore.schema';
import { celebrate, Segments } from 'celebrate';
import Router from 'express';
import { StoreController } from '../controller/StoreController';

const storeRoutes = Router();

const storeController = new StoreController();

storeRoutes.post(
  '/',
  [celebrate({ [Segments.BODY]: createStoreSchema })],
  storeController.create
);

storeRoutes.get('/', storeController.list);
storeRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateStoreSchema })],
  storeController.update
);

export { storeRoutes };
