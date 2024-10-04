import Joi from "joi";

const tradeValidator = async (data) => {
  const tradeValidationSchema = Joi.object({
    action: Joi.string().valid("buy", "sell").required(),

    stockSymbol: Joi.string().required(),

    price: Joi.number().positive().required(),

    quantity: Joi.number().integer().positive().required(),
  });
  return tradeValidationSchema.validate(data);
};
