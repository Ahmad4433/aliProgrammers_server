const BlogPost = require("../../../models/BlogPost");
const cloudinary = require("cloudinary").v2;
const checkImgMime = require("../../../utils/checkImgMime");
const checkImgSize = require("../../../utils/checkImgSize");

const editBlogPost = async (req, res, next) => {
  const { title, description } = req.body;
  const postId = req.query.id;
  cloudinary.config({
    cloud_name: "dhqwq5tmh",
    api_key: "178472134475739",
    api_secret: "akUIq13dXsEJCVMQivE7LPa9gpM",
  });

  try {
    const findedPost = await BlogPost.findById(postId);
    let result;
    if (req.files) {
      checkImgMime(req, next);
      checkImgSize(req, next);
      result = await Promise.all(
        req.files.map(async (file) => {
          return await cloudinary.uploader.upload(file.path);
        })
      );
    }

    const extractedUrl = result ? result.map((item) => item.secure_url) : [];
    const existingImages = findedPost.image.map((img) => img);

    findedPost.title = title;
    findedPost.description = description;
    findedPost.image = req.files.length > 0 ? extractedUrl : existingImages;
    await findedPost.save();

    res.status(200).json({ message: "post updated successfully", status: true });
  } catch (error) {
    next(error);
  }
};

module.exports = editBlogPost;
