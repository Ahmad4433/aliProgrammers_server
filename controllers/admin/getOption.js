const Desigination = require("../../models/Desigination");
const Department = require("../../models/Department");

const getOption = async (req, res, next) => {
  try {
    const desgList = await Desigination.find();
    const depaList = await Department.find();

    res
      .status(200)
      .json({ message: "success", status: true, desgList, depaList });
  } catch (error) {
    next(error);
  }
};

module.exports = getOption;
