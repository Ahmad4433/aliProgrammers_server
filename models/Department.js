const mongoose = require("mongoose");
const departmenrSchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", departmenrSchema);
