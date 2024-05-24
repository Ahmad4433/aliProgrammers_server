const express = require("express");
const addMessage = require("../../controllers/admin/contact-us/addMessage");
const getAllContact = require("../../controllers/admin/contact-us/getAllContacts");
const router = express.Router();

router.post("/send", addMessage);
router.get("/get", getAllContact);

module.exports = router;
