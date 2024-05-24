const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema(
  {
    name: { type: String },
    title: { type: String },
    company: { type: String },
    detail: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    url: { type: String },
    image: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
