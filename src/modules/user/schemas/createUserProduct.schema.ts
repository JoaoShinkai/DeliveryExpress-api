import Joi from 'joi';

const createUserProductSchema = Joi.object({
  product: Joi.object({ id: Number }).required(),
  quantity: Joi.number().required(),
  unityPrice: Joi.number().required(),
  amount: Joi.number().required(),
  additionals: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      optionAdditional: Joi.object({ id: Number }).required()
    })
  )
});

export default createUserProductSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
