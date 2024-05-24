const checkImgMine = async (req, next) => {
    try {
      await Promise.all(
        req.files.map(async (file) => {
          if (
            !(
              file.mimetype === "image/png" ||
              file.mimetype === "image/jpg" ||
              file.mimetype === "image/jpeg"
            )
          ) {
            const error = new Error("Invalid image format");
            error.statusCode = 400;
            throw error;
          }
        })
      );
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = checkImgMine;
  