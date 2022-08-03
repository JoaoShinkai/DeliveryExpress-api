import createUserProductSchema from '@modules/userProduct/schemas/createUserProduct.schema';
import userAuth from '@shared/infra/http/middlewares/userAuth';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import { UserProductController } from '../controller/UserProductController';

const userProductRoutes = Router();
const userProductController = new UserProductController();

// User Product
userProductRoutes.post(
  '/',
  [celebrate({ [Segments.BODY]: createUserProductSchema })],
  userAuth,
  userProductController.addProductToCart
);
userProductRoutes.delete('/', userAuth, userProductController.deleteCartItems);
userProductRoutes.delete('/:id', userAuth, userProductController.delete);
userProductRoutes.get('/', userAuth, userProductController.listCartItems);

export { userProductRoutes };
