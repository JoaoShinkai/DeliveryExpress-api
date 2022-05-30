import Joi from 'joi';

const createOptionAdditionalSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  additionalId: Joi.number().required()
});

export default createOptionAdditionalSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
