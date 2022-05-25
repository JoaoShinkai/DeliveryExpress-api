import { storeRoutes } from '@modules/store/infra/http/routes/store.routes';
import { userRoutes } from '@modules/user/infra/http/routes/user.routes';
import Router from 'express';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/store', storeRoutes);

export { routes };
