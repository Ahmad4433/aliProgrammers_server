const User = require("../../../models/User");
const joi = require("joi");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const sendMail = require("../../../services/sendMail");
const registerUser = async (req, res, next) => {
  const { error: validationError } = validateUser(req.body);
  const { firstName, lastName, email, password } = req.body;

  try {
    if (validationError) {
      const error = new Error(validationError.details[0].message);
      error.statusCode = 400;
      throw error;
    }

    const IsEmailExist = await User.findOne({ email: email });
    if (IsEmailExist) {
      const error = new Error("this email is already taken");
      error.statusCode = 400;
      throw error;
    }

    const hashedPAss = await bcrypt.hash(password, 10);

    const verificationSecret = crypto.randomBytes(32).toString("hex");

    const createdUser = new User({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: hashedPAss,
      verification_secret: verificationSecret,
    });

    const data = {
      to: email,
      subject: "password verification",
      link: verificationSecret,
    };

    const info = await sendMail(data);
    if (!info) {
      const error = new Error("faild to send email please try again");
      error.statusCode = 400;
      throw error;
    }

    const savedUser = await createdUser.save();
    res.status(200).json({
      message:
        "check your email box a verification link has been sent to your email address, Please verify your account first",
      status: true,
      userId: savedUser._id,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = registerUser;

function validateUser(data) {
  const userSchema = joi.object({
    firstName: joi.string().alphanum().min(2).max(24).required(),
    lastName: joi.string().min(2).alphanum().max(24).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).max(12).required(),
  });

  return userSchema.validate(data);
}
