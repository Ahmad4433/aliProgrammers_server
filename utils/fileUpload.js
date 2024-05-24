const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    const num = Math.floor(Math.random() * 1e9);
    cb(null, file.originalname + num + file.originalname);
  },
});

// Multer configuration for handling file uploads in memory
const upload = multer({ storage: storage });

module.exports = upload;
