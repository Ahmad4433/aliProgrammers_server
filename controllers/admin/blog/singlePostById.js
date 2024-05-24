const BlogPost = require("../../../models/BlogPost");

const singlePostById = async (req, res, next) => {
  const postId = req.query.id;
  try {
    const findedPost = await BlogPost.findById(postId);

    res.status(200).json({ message: "success", status: true, findedPost });
  } catch (error) {
    next(error);
  }
};

module.exports = singlePostById;
