// src/middlewares/validationMiddleware.js

// import Joi from 'joi';

// const userDetailsSchema = Joi.object({
//   name: Joi.string().required(),
//   phone: Joi.number().required().integer().min(1000000000).max(9999999999),
//   email: Joi.string().email().required(),
//   gender: Joi.string().valid('male', 'female', 'other').required(),
//   bodyZone: Joi.string().required(),
//   location: Joi.string().required(),
// });

// export const validateInput = (req, res, next) => {
//   const validationResult = userDetailsSchema.validate(req.body);
//   if (validationResult.error) {
//     return res.status(400).json({ error: validationResult.error.message });
//   }
//   next();
// };