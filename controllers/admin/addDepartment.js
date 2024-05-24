const Department = require("../../models/Department");

const addDepartment = async (req, res, next) => {
  const { name } = req.body;

  try {
    if (!name || name.trim().length < 2) {
      const error = new Error("please provide proper department");
      error.statusCode = 400;
      throw error;
    }
    const formatedName = name.toLowerCase();

    const findedDepartment = await Department.findOne({ name: formatedName });
    if (findedDepartment) {
      const error = new Error("department is alredy exist");
      error.statusCode = 400;
      throw error;
    }

    const newDepartment = new Department({
      name: formatedName,
    });

    await newDepartment.save();
    res
      .status(200)
      .json({ message: "department add successfully", status: true });
  } catch (error) {
    next(error);
  }
};

module.exports = addDepartment;
