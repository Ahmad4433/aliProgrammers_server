const User = require("../../../models/User");

const userVerifyAccount = async (req, res, next) => {
  const { secret } = req.query;

  try {
    if (!secret) {
      const error = new Error("invalid url link");
      error.statusCode = 400;
      throw error;
    }

    const findedUser = await User.findOne({ verification_secret: secret });
    if (!findedUser) {
      const error = new Error("failed to verify your account try again");
      error.statusCode = 400;
      throw error;
    }

    if (findedUser.is_active) {
      const error = new Error("you account is already verified");
      error.statusCode = 400;
      throw error;
    }

    findedUser.is_active = true;
    await findedUser.save();

    res
      .status(200)
      .json({ message: "account verified successfully Thanks!", status: true });
  } catch (error) {
    next(error);
  }
};

module.exports = userVerifyAccount;
