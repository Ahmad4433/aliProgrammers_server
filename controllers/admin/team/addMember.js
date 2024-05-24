const TeamMebmer = require("../../../models/TeamMebmer");
const checkImageSize = require("../../../utils/checkImgSize");
const checkImageMime = require("../.../../../../utils/checkImgMime");
const cloudinary = require("cloudinary").v2;
const addMember = async (req, res, next) => {
  const { name, desigination, department } = req.body;

  cloudinary.config({
    cloud_name: "dhqwq5tmh",
    api_key: "178472134475739",
    api_secret: "akUIq13dXsEJCVMQivE7LPa9gpM",
  });

  try {
    if (!req.files || req.files.length === 0) {
      const error = new Error("image is required");
      error.statusCode = 400;
      throw error;
    }

    checkImageMime(req, next);
    checkImageSize(req, next);

    const result = await cloudinary.uploader.upload(req.files[0].path);

    const newMember = new TeamMebmer({
      name,
      desigination,
      department,
      image: result.secure_url,
    });

    await newMember.save()
    res.status(200).json({message:'member added successfully',status:true})

  } catch (error) {
    next(error);
  }
};

module.exports = addMember;
