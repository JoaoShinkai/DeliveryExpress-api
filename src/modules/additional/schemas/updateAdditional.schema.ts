import Joi from 'joi';

const updateAdditionalSchema = Joi.object({
  name: Joi.string(),
  multiple: Joi.number()
});

export default updateAdditionalSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
