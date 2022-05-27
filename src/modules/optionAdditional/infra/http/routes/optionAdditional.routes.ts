import createOptionAdditionalSchema from '@modules/optionAdditional/schemas/optionAdditional.schema';
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

export { optionAdditionalRoutes };
