import createCategorySchema from '@modules/category/schemas/createCategory.schema';
import updateCategorySchema from '@modules/category/schemas/updateCategory.schema';
import storeAuth from '@shared/infra/http/middlewares/storeAuth';
import { celebrate, Segments } from 'celebrate';
import Router from 'express';
import { CategoryController } from '../controller/CategoryController';

const categoryRoutes = Router();
const categoryController = new CategoryController();

categoryRoutes.post(
  '/',
  [celebrate({ [Segments.BODY]: createCategorySchema })],
  categoryController.create
);

categoryRoutes.get('/', categoryController.list);
categoryRoutes.get('/:id', categoryController.listById);
categoryRoutes.get('/store/:id', categoryController.listByStore);

categoryRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateCategorySchema })],
  categoryController.update
);

categoryRoutes.delete('/:id', storeAuth, categoryController.delete);

export { categoryRoutes };
