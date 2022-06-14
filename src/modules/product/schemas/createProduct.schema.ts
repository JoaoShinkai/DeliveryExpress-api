import Joi from 'joi';

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string(),
  available: Joi.number().required(),
  categoryId: Joi.number().required()
});

export default createProductSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
