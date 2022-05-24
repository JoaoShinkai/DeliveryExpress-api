import Joi from 'joi';

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phone: Joi.string().required(),
  birthDate: Joi.date().required()
});

export default createUserSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
