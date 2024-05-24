const Contact = require("../../../models/Contact");
const sendMail = require("../../../services/sendMail");
const userTouchMailTemplate = require("../../../html/userTouchMail");
const addMessage = async (req, res, next) => {
  const { name, email, phone, message } = req.body;

  try {
    if (!name || !email || !message || !phone) {
      const error = new Error("all fields are required");
      error.statusCode = 400;
      throw error;
    }

    const newMeesgae = new Contact({
      name,
      email,
      message,
      phone,
    });

    await newMeesgae.save();

    const data = {
      to: email,
      subject: "Thank You for Contacting AliProgrammers",
      template: userTouchMailTemplate(name),
    };

    await sendMail(data);

    res.status(200).json({
      message:
        "Thank you for reaching out to us! 🌟,we will get back to you as soon as possible",
      status: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addMessage;
