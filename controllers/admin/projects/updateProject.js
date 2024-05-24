const Project = require("../../../models/Project");
const checkFileMime = require("../../../utils/checkImgMime");
const checkImgSize = require("../../../utils/checkImgSize");
const cloudinary = require("cloudinary").v2;
const updateProject = async (req, res, next) => {
  const projectId = req.query.id;
  const { name, title, company, detail, startDate, endDate, url } = req.body;
  cloudinary.config({
    cloud_name: "dhqwq5tmh",
    api_key: "178472134475739",
    api_secret: "akUIq13dXsEJCVMQivE7LPa9gpM",
  });

  try {
    const findedProject = await Project.findById(projectId);
    let result;
    if (req.files) {
      checkFileMime(req, next);
      checkImgSize(req, next);
      result = await await Promise.all(
        req.files.map(async (file) => {
          return cloudinary.uploader.upload(file.path);
        })
      );
    }

    findedProject.name = name;
    findedProject.title = title;
    findedProject.company = company;
    findedProject.detail = detail;
    findedProject.startDate = startDate;
    findedProject.endDate = endDate;
    findedProject.url = url;
    findedProject.image = req.files
      ? result.map((item) => item.secure_url)
      : findedProject.image;

    await findedProject.save();
    res
      .status(200)
      .json({ message: "project updated successfully", status: true });
  } catch (error) {
    next(error);
  }
};

module.exports = updateProject;
