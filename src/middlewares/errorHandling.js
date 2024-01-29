// src/middlewares/errorHandling.js

export const notFoundHandler = (req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  };

export const errorHandler = (err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
      status: 'error',
      statusCode,
      message: err.message,
    });
  };