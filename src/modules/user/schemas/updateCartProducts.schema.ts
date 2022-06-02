import Joi from 'joi';

const updateCartProductSchema = Joi.object({
  cart: Joi.array()
    .items(
      Joi.object({
        product: Joi.object({ id: Joi.number() }),
        quantity: Joi.number().required(),
        unityPrice: Joi.number().required(),
        amount: Joi.number().required(),
        discount: Joi.number(),
        observation: Joi.string()
      })
    )
    .required()
});

export default updateCartProductSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
