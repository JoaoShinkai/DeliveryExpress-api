import Joi from 'joi';

const createAdditionalSchema = Joi.object({
  name: Joi.string().required(),
  multiple: Joi.number().required(),
  productId: Joi.number().required()
});

export default createAdditionalSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
