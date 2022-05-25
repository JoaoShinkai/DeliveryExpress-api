import Joi from 'joi';

const updateUserSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string(),
  phone: Joi.string(),
  birthDate: Joi.string()
});

export default updateUserSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
