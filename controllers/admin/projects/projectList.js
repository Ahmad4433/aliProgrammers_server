const Project = require("../../../models/Project");
const projectList = async (req, res, next) => {
  const page = req.query.page;
  const pageLimit = 6;
  try {
    const projectList = await Project.find()
      .sort({ _id: -1 })
      .skip((page - 1) * pageLimit)
      .limit(pageLimit);
    const count = await Project.countDocuments();
    const paginationLength = Math.ceil(count / 6);
    res.status(200).json({
      message: "success",
      status: true,
      list: projectList,
      count: paginationLength,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = projectList;
