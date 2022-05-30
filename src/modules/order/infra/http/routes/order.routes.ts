import createOrderSchema from '@modules/order/schemas/createOrder.schema';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import { OrderController } from '../controller/OrderController';

const orderRoutes = Router();
const orderController = new OrderController();

orderRoutes.post(
  '/',
  [celebrate({ [Segments.BODY]: createOrderSchema })],
  orderController.create
);

export { orderRoutes };
