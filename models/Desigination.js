const mongoose = require("mongoose");
const desiginationSchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Desigination", desiginationSchema);
