import { AuthController } from '@modules/auth/AuthController';
import createStoreSchema from '@modules/store/schemas/createStore.schema';
import updateStoreSchema from '@modules/store/schemas/updateStore.schema';
import storeAuth from '@shared/infra/http/middlewares/storeAuth';
import userAuth from '@shared/infra/http/middlewares/userAuth';
import { celebrate, Segments } from 'celebrate';
import Router from 'express';
import { StoreController } from '../controller/StoreController';

const storeRoutes = Router();

const storeController = new StoreController();
const authController = new AuthController();

storeRoutes.post(
  '/',
  [celebrate({ [Segments.BODY]: createStoreSchema })],
  storeController.create
);

storeRoutes.post('/authenticate', storeAuth, authController.VerifyStoreToken);

storeRoutes.post('/login', storeController.login);

storeRoutes.get('/', userAuth, storeController.list);
storeRoutes.get('/:id', userAuth, storeController.listById);
storeRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateStoreSchema })],
  storeController.update
);

export { storeRoutes };
