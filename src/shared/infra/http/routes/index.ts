import { additionalRoutes } from '@modules/additional/infra/http/routes/additional.routes';
import { categoryRoutes } from '@modules/category/infra/http/routes/category.routes';
import { productRoutes } from '@modules/product/infra/http/routes/product.routes';
import { storeRoutes } from '@modules/store/infra/http/routes/store.routes';
import { userRoutes } from '@modules/user/infra/http/routes/user.routes';
import Router from 'express';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/store', storeRoutes);
routes.use('/category', categoryRoutes);
routes.use('/product', productRoutes);
routes.use('/additional', additionalRoutes);

export { routes };
