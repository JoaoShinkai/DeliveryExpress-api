import Joi from 'joi';

const createStoreSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  delivery: Joi.number().required(),
  status: Joi.number().required()
});

export default createStoreSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
