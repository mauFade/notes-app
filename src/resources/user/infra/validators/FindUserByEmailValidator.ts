import { celebrate, Joi, Segments } from "celebrate";

export const FindUserByEmailValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
});
