import createAdditionalSchema from '@modules/additional/schemas/createAdditional.schema';
import updateAdditionalSchema from '@modules/additional/schemas/updateAdditional.schema';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import { AdditionalController } from '../controller/AdditionalController';

const additionalRoutes = Router();
const additionalController = new AdditionalController();

additionalRoutes.post(
  '/',
  [celebrate({ [Segments.BODY]: createAdditionalSchema })],
  additionalController.create
);

additionalRoutes.get('/product/:id', additionalController.listByProduct);

additionalRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateAdditionalSchema })],
  additionalController.update
);

export { additionalRoutes };
