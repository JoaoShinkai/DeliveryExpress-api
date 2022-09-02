import createOrderSchema from '@modules/order/schemas/createOrder.schema';
import updateOrderSchema from '@modules/order/schemas/updateOrder.schema';
import storeAuth from '@shared/infra/http/middlewares/storeAuth';
import userAuth from '@shared/infra/http/middlewares/userAuth';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import { OrderController } from '../controller/OrderController';

const orderRoutes = Router();
const orderController = new OrderController();

orderRoutes.post(
  '/',
  userAuth,
  [celebrate({ [Segments.BODY]: createOrderSchema })],
  orderController.create
);

orderRoutes.get('/', userAuth, orderController.list);
orderRoutes.get('/store', storeAuth, orderController.listByStore);
orderRoutes.get('/status/:id', storeAuth, orderController.listByStatus);
orderRoutes.get(
  '/count-top-selling-products',
  storeAuth,
  orderController.countTopSellingProducts
);
orderRoutes.get(
  '/calc-monthly-profit',
  storeAuth,
  orderController.calcMonthlyProfit
);
orderRoutes.get(
  '/count-top-clients',
  storeAuth,
  orderController.countTopClients
);
orderRoutes.get('/:id', orderController.listById);
orderRoutes.put(
  '/:id',
  storeAuth,
  [celebrate({ [Segments.BODY]: updateOrderSchema })],
  orderController.update
);

export { orderRoutes };
