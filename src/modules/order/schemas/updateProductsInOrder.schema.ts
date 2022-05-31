import Joi from 'joi';

const updateProductsInOrderSchema = Joi.object({
  products: Joi.array().items(
    Joi.object({
      productId: Joi.number().positive(),
      quantity: Joi.number().required(),
      unityPrice: Joi.number().required(),
      amount: Joi.number().required(),
      discount: Joi.number(),
      observation: Joi.string()
    })
  )
});

export default updateProductsInOrderSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
