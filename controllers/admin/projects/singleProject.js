const Project = require("../../../models/Project");
const singleProject = async (req, res, next) => {
  const projectId = req.query.id;

  try {
    const findedProject = await Project.findById(projectId);

    res
      .status(200)
      .json({ message: "success", status: true, project: findedProject });
  } catch (error) {
    next(error);
  }
};
module.exports = singleProject;
