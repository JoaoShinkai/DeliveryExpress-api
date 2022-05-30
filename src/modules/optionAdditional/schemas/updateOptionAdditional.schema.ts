import Joi from 'joi';

const createOptionAdditionalSchema = Joi.object({
  name: Joi.string(),
  price: Joi.number()
});

export default createOptionAdditionalSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
