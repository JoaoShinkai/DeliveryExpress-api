import createProductSchema from '@modules/product/schemas/createProduct.schema';
import storeAuth from '@shared/infra/http/middlewares/storeAuth';
import { celebrate, Segments } from 'celebrate';
import Router from 'express';
import { ProductController } from '../controller/ProductController';

const productRoutes = Router();
const productController = new ProductController();

productRoutes.post(
  '/',
  [celebrate({ [Segments.BODY]: createProductSchema })],
  storeAuth,
  productController.create
);

productRoutes.get('/', productController.list);
productRoutes.get('/:id', productController.listById);
productRoutes.get('/category/:id', storeAuth, productController.listByCategory);
productRoutes.put('/:id', productController.update);
productRoutes.delete('/:id', productController.delete);

export { productRoutes };
