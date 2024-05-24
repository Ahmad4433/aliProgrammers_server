const BlogPost = require("../../../models/BlogPost");
const blogList = async (req, res, next) => {
  try {
    const list = await BlogPost.find().sort({ _id: -1 });

    res.status(200).json({ message: "success", status: true, list });
  } catch (error) {
    next(error);
  }
};

module.exports = blogList;
