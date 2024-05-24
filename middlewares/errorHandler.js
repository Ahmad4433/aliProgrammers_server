const errorHandler = async (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Server error";
  res.status(statusCode).json({ message: message });
};

module.exports = errorHandler;
