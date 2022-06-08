import { AuthController } from '@modules/auth/AuthController';
import createUserSchema from '@modules/user/schemas/createUser.schema';
import updateCartProductsSchema from '@modules/user/schemas/updateCartProducts.schema';
import updateUserSchema from '@modules/user/schemas/updateUser.schema';
import adminAuth from '@shared/infra/http/middlewares/adminAuth';
import userAuth from '@shared/infra/http/middlewares/userAuth';
import { celebrate, Segments } from 'celebrate';
import Router from 'express';
import { UserController } from '../controller/UserController';

const userRoutes = Router();

const userController = new UserController();
const authController = new AuthController();

userRoutes.post(
  '/',
  [celebrate({ [Segments.BODY]: createUserSchema })],
  userController.create
);
userRoutes.post('/login', userController.login);
userRoutes.post('/authenticate', userAuth, authController.VerifyToken);

userRoutes.get('/', adminAuth, userController.list);
userRoutes.get('/:id', userController.listById);
userRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateUserSchema })],
  userController.update
);
userRoutes.put(
  '/:id/products',
  [celebrate({ [Segments.BODY]: updateCartProductsSchema })],
  userController.updateCartProducts
);

export { userRoutes };
