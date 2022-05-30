import Joi from 'joi';

const createOrderSchema = Joi.object({
  paymentMethod: Joi.number().required(),
  changeMoney: Joi.number(),
  amount: Joi.number().required(),
  delivery: Joi.number(),
  uf: Joi.string().required(),
  city: Joi.string().required(),
  district: Joi.string().required(),
  street: Joi.string().required(),
  number: Joi.string().required(),
  complement: Joi.string(),
  reference: Joi.string(),
  userId: Joi.number().required(),
  storeId: Joi.number().required()
});

export default createOrderSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});