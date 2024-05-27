import * as Joi from 'joi';

export const appValidationSchema = Joi.object({
  PORT: Joi.number().default(4000),
  CORS_ORIGIN: Joi.string().required(),
});
