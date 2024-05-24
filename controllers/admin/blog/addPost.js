const cloudinary = require("cloudinary").v2;
const BlogPost = require("../../../models/BlogPost");
require("dotenv").config();
const checkImgMine = require("../../../utils/checkImgMime");
const checkImgSize = require("../../../utils/checkImgSize");
const fs = require("fs");

cloudinary.config({
  cloud_name: "dhqwq5tmh",
  api_key: "178472134475739",
  api_secret: "akUIq13dXsEJCVMQivE7LPa9gpM",
});

const addPost = async (req, res, next) => {

  const { title, description } = req.body;

  try {
    // Check if file is uploaded
    if (!req.files) {
      const error = new Error("no file provided");
      error.statusCode = 400;
      throw error;
    }

    checkImgMine(req, next);
    checkImgSize(req, next);
    // Upload file to Cloudinary from memory buffer
    const uploadResults = await Promise.all(
      req.files.map(async (file) => {
        return await cloudinary.uploader.upload(file.path);
      })
    );

    // Extract secure URLs from upload results
    const imageUrls = uploadResults.map((result) => result.secure_url);

    // Create a new blog post with the Cloudinary URL
    const newPost = new BlogPost({
      title: title,
      description: description,
      image: imageUrls, // Use the secure URL from Cloudinary
    });

    // Save the new blog post to the database
    await newPost.save();

    req.files.map((file) => fs.unlink(file.path, (error) => {}));

    // Respond with success message
    res.json({ message: "post added successfully",status:true });
  } catch (error) {
    next(error);
  }
};

module.exports = addPost;
