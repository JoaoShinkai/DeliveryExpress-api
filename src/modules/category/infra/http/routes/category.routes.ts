import createCategorySchema from '@modules/category/schemas/createCategory.schema';
import updateCategorySchema from '@modules/category/schemas/updateCategory.schema';
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
categoryRoutes.get('/store/:id', categoryController.listByStore);

categoryRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateCategorySchema })],
  categoryController.update
);

export { categoryRoutes };
