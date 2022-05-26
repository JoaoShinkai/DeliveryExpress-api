import Joi from 'joi';

const createCategorySchema = Joi.object({
  name: Joi.string().required(),
  icon: Joi.string().required(),
  storeId: Joi.number().required()
});

export default createCategorySchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
