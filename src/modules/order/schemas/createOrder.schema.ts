import Joi from 'joi';

const createOrderSchema = Joi.object({
  paymentMethod: Joi.number().required(),
  changeMoney: Joi.number(),
  amount: Joi.number().required(),
  delivery: Joi.number(),
  uf: Joi.string().required(),
  city: Joi.string().required(),
  district: Joi.string().required(),
  street: Joi.string().required(),
  number: Joi.string().required(),
  complement: Joi.string(),
  reference: Joi.string(),
  storeId: Joi.number().required(),
  status: Joi.object({ id: Joi.number().required() }).required(),
  products: Joi.array()
    .items(
      Joi.object({
        product: Joi.object({ id: Joi.number() }),
        quantity: Joi.number().required(),
        unityPrice: Joi.number().required(),
        amount: Joi.number().required(),
        discount: Joi.number(),
        observation: Joi.string(),
        additionals: Joi.array().items(
          Joi.object({
            name: Joi.string().required(),
            price: Joi.number().required(),
            optionAdditional: Joi.object({ id: Joi.number() }).required()
          })
        )
      })
    )
    .required()
});

export default createOrderSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
});
