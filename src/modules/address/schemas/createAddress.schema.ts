import Joi from 'joi';

const createAddressSchema = Joi.object({
  uf: Joi.string().required(),
  postalCode: Joi.string().required(),
  city: Joi.string().required(),
  district: Joi.string().required(),
  street: Joi.string().required(),
  number: Joi.string().required(),
  complement: Joi.string(),
  reference: Joi.string(),
  userId: Joi.number().required()
});

export default createAddressSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
