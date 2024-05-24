const express = require("express");
const addPost = require("../../controllers/admin/blog/addPost");
const fileUpload = require("../../utils/fileUpload");
const blogList = require("../../controllers/admin/blog/blogList");
const singlePostById = require("../../controllers/admin/blog/singlePostById");
const editSinglPost = require("../../controllers/admin/blog/editBlogPost");
const deletePost = require("../../controllers/admin/blog/deletePost");
const router = express.Router();

router.post("/add", fileUpload.array("image"), addPost);
router.get("/list", blogList);
router.get("/single", singlePostById);
router.put("/edit", fileUpload.array("image"), editSinglPost);
router.delete("/delete", deletePost);

module.exports = router;
