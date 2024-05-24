const express = require("express");
const addProject = require("../../controllers/admin/projects/addProject");
const fileUpload = require("../../utils/fileUpload");
const projectList = require("../../controllers/admin/projects/projectList");
const updateProject = require("../../controllers/admin/projects/updateProject");
const singleProject = require("../../controllers/admin/projects/singleProject");

const router = express.Router();

router.post("/add", fileUpload.array("image"), addProject);
router.get("/get", projectList);
router.get("/single", singleProject);
router.put("/update", fileUpload.array("image"), updateProject);

module.exports = router;
