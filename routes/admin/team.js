const express = require("express");
const addMember = require("../../controllers/admin/team/addMember");
const fileUpload = require("../../utils/fileUpload");
const getTeam = require('../../controllers/admin/team/getTeam')
const router = express.Router();

router.post("/add", fileUpload.array("image"), addMember);
router.get('/get',getTeam   )

module.exports = router;
