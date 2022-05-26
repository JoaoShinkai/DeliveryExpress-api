import Joi from 'joi';

const updateProductSchema = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
  description: Joi.string(),
  available: Joi.number()
});

export default updateProductSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
