import Joi from 'joi';

const createAddressSchema = Joi.object({
  uf: Joi.string(),
  postalCode: Joi.string(),
  city: Joi.string(),
  district: Joi.string(),
  street: Joi.string(),
  number: Joi.string(),
  complement: Joi.string(),
  reference: Joi.string()
});

export default createAddressSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
