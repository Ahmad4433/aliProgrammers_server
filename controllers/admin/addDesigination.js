const Desigination = require("../../models/Desigination");

const addDesigination = async (req, res, next) => {
  const { name } = req.body;

  try {
    if (!name || name.trim().length < 2) {
      const error = new Error("please provide proper desigination");
      error.statusCode = 400;
      throw error;
    }
    const formatedName = name.toLowerCase();

    const findedDesigination = await Desigination.findOne({ name: formatedName });
    if (findedDesigination) {
      const error = new Error("desigination is alredy exist");
      error.statusCode = 400;
      throw error;
    }

    const newDesigination = new Desigination({
      name: formatedName,
    });

    await newDesigination.save();
    res
      .status(200)
      .json({ message: "desigination add successfully", status: true });
  } catch (error) {
    next(error);
  }
};

module.exports = addDesigination;
