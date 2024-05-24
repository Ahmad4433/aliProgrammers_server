const Project = require("../../../models/Project");
const cloudinary = require("cloudinary").v2;
const checkImageMime = require("../../../utils/checkImgMime");
const checkImageSize = require("../../../utils/checkImgSize");

const addProject = async (req, res, next) => {
  const { name, title, detail, url, startDate, endDate, company } = req.body;

  try {
    cloudinary.config({
      cloud_name: "dhqwq5tmh",
      api_key: "178472134475739",
      api_secret: "akUIq13dXsEJCVMQivE7LPa9gpM",
    });

    checkImageMime(req, next);
    checkImageSize(req, next);
    const result = await Promise.all(
      req.files.map(async (file) => {
        return await cloudinary.uploader.upload(file.path);
      })
    );
    const links = result.map((item) => {
      return item.secure_url;
    });

    const newProject = new Project({
      name,
      title,
      company,
      detail,
      url,
      startDate,
      endDate,
      image: links,
    });

    await newProject.save();

    res
      .status(200)
      .json({ message: "project added successfully", status: true });
  } catch (error) {
    next(error);
  }
};

module.exports = addProject;
