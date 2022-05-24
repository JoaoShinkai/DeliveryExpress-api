import createUserSchema from '@modules/user/schemas/createUser.schema';
import { celebrate, Segments } from 'celebrate';
import Router from 'express';
import { UserController } from '../controller/UserController';

const userRoutes = Router();

const userController = new UserController();

userRoutes.post(
  '/',
  [celebrate({ [Segments.BODY]: createUserSchema })],
  userController.create
);

export { userRoutes };
