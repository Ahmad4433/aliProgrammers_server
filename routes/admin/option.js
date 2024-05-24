const express = require("express");
const addDepartment = require("../../controllers/admin/addDepartment");
const addDesigination = require("../../controllers/admin/addDesigination");
const getOption = require("../../controllers/admin/getOption");
const router = express.Router();

router.post("/add/desigination", addDesigination);
router.post("/add/department", addDepartment);
router.get("/get", getOption);

module.exports = router;
