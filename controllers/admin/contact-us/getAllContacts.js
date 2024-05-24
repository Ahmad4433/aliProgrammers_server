const Contact = require("../../../models/Contact");
const getAllContact = async (req, res, next) => {
  const pageNum = req.query.page;
  const pageLimit = 10;
  try {
    const contactList = await Contact.find()
      .sort({ _id: -1 })
      .skip((pageNum - 1) * pageLimit)
      .limit(pageLimit);
      const totalCount = await Contact.countDocuments();
    res
      .status(200)
      .json({
        message: "success",
        status: true,
        list: contactList,
        count: Math.ceil(totalCount/10),
      });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllContact;
