import Joi from 'joi';

const updateOrderSchema = Joi.object({
  status: Joi.number(),
  viewed: Joi.date(),
  conclusion: Joi.date(),
  accepted: Joi.number()
});

export default updateOrderSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
