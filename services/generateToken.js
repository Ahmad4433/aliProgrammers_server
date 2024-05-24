const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = async (user) => {
  try {
    const accessToken = await jwt.sign(
      { role: user.role, email: user.email, id: user.id },
      process.env.ACCESS_TOKEN_KEY, 
      { expiresIn: "5m" }
    );

    const refreshToken = await jwt.sign(
      { role: user.role, email: user.email, id: user.id },
      process.env.REFRESH_TOKEN_KEY, 
      { expiresIn: "7d" }
    );

    return { accessToken, refreshToken };
  } catch (error) {
    throw error;
  }
};

module.exports = generateToken;
