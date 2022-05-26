import Joi from 'joi';

const updateStoreSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string(),
  delivery: Joi.number(),
  status: Joi.number()
});

export default updateStoreSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
