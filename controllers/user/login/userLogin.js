const User = require("../../../models/User");
const bcrypt = require("bcrypt");
const generateToken = require("../../../services/generateToken");
const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const findedUser = await User.findOne({ email: email });
    if (!findedUser) {
      const error = new Error("invalid email address");
      error.statuCode = 400;
      throw error;
    }

    const isPassMath = await bcrypt.compare(password, findedUser.password);
    if (!isPassMath) {
      const error = new Error("invalid password");
      error.statuCode = 400;
      throw error;
    }

    if (!findedUser.is_active) {
      const error = new Error("please verify your account first");
      error.statuCode = 400;
      throw error;
    }

    const user = {
      role: findedUser.role,
      email: findedUser.email,
      id: findedUser._id,
    };

    const { accessToken, refreshToken } = await generateToken(user);

    res.status(200).json({
      message: "success",
      status: true,
      tokens: { accessToken, refreshToken },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = userLogin;
