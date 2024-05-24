const checkImgSize = (req, next) => {
try {
    req.files.map((file) => {
        if (file.size > 1024 * 1024 * 3) {
          const error = new Error("image must be less then or equal to 3mb");
          error.statusCode = 400;
          throw error;
        }
      });
} catch (error) {
    next(error)
}
};

module.exports = checkImgSize