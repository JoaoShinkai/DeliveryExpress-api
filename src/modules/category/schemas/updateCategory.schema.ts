import Joi from 'joi';

const updateCategorySchema = Joi.object({
  name: Joi.string(),
  icon: Joi.string()
});

export default updateCategorySchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
