const mongoose = require("mongoose");
const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    image: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogPost", blogPostSchema);
