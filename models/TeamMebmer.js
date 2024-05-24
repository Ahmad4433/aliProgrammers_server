const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema(
  {
    name: { type: String },
    desigination: { type: String },
    department: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TeamMebmer", teamSchema);
