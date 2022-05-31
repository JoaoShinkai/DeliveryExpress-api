import createOrderSchema from '@modules/order/schemas/createOrder.schema';
import updateOrderSchema from '@modules/order/schemas/updateOrder.schema';
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

orderRoutes.get('/', orderController.list);
orderRoutes.get('/:id', orderController.listById);
orderRoutes.get('/user/:id', orderController.listByUser);
orderRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateOrderSchema })],
  orderController.update
);

export { orderRoutes };
