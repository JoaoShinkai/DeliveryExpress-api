import createProductSchema from '@modules/product/schemas/createProduct.schema';
import { celebrate, Segments } from 'celebrate';
import Router from 'express';
import { ProductController } from '../controller/ProductController';

const productRoutes = Router();
const productController = new ProductController();

productRoutes.post(
  '/',
  [celebrate({ [Segments.BODY]: createProductSchema })],
  productController.create
);

productRoutes.get('/', productController.list);
productRoutes.get('/:id', productController.listById);
productRoutes.put('/:id', productController.update);

export { productRoutes };
