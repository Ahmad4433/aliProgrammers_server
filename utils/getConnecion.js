const mongoose = require("mongoose");
require("dotenv").config();

const getConnection = async () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((connection)=>console.log('db is connectted'))
    .catch((error) => {
      console.log(error);
    });
};

module.exports = getConnection;
