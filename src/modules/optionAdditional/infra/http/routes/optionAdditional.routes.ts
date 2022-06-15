import createOptionAdditionalSchema from '@modules/optionAdditional/schemas/createOptionAdditional.schema';
import updateOptionAdditionalSchema from '@modules/optionAdditional/schemas/updateOptionAdditional.schema';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import { OptionAdditionalController } from '../controller/OptionAdditionalController';

const optionAdditionalRoutes = Router();
const optionAdditionalController = new OptionAdditionalController();

optionAdditionalRoutes.post(
  '/',
  [celebrate({ [Segments.BODY]: createOptionAdditionalSchema })],
  optionAdditionalController.create
);

optionAdditionalRoutes.get('/', optionAdditionalController.list);
optionAdditionalRoutes.get('/:id', optionAdditionalController.listById);

optionAdditionalRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateOptionAdditionalSchema })],
  optionAdditionalController.update
);

export { optionAdditionalRoutes };
