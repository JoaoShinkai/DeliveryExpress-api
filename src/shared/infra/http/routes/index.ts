import { additionalRoutes } from '@modules/additional/infra/http/routes/additional.routes';
import { addressRoutes } from '@modules/address/infra/http/routes/address.routes';
import { categoryRoutes } from '@modules/category/infra/http/routes/category.routes';
import { optionAdditionalRoutes } from '@modules/optionAdditional/infra/http/routes/optionAdditional.routes';
import { orderRoutes } from '@modules/order/infra/http/routes/order.routes';
import { productRoutes } from '@modules/product/infra/http/routes/product.routes';
import { storeRoutes } from '@modules/store/infra/http/routes/store.routes';
import { userRoutes } from '@modules/user/infra/http/routes/user.routes';
import { userProductRoutes } from '@modules/userProduct/infra/http/routes/userProduct.routes';
import Router from 'express';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/store', storeRoutes);
routes.use('/category', categoryRoutes);
routes.use('/product', productRoutes);
routes.use('/additional', additionalRoutes);
routes.use('/optionAdditional', optionAdditionalRoutes);
routes.use('/address', addressRoutes);
routes.use('/order', orderRoutes);
routes.use('/userProduct', userProductRoutes);

export { routes };
