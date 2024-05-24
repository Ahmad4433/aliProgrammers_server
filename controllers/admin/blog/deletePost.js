const BlogPost = require("../../../models/BlogPost");
const deletePost = async (req, res, next) => {
  const postId = req.query.id;
  try {
    await BlogPost.findByIdAndDelete(postId);

    res.status(200).json({ message: "succrss", status: true });
  } catch (error) {
    next(error);
  }
};

module.exports = deletePost;
