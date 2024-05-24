const express = require("express");
const cors = require("cors");
require("dotenv").config();
const getConnection = require("./utils/getConnecion");
const errorHandler = require("./middlewares/errorHandler");
const blogRoutes = require("./routes/admin/blog");
const contactUsRoutes = require("./routes/admin/contact");
const teamRoutes = require("./routes/admin/team");
const optionRoutes = require("./routes/admin/option");
const projectRoutes = require("./routes/admin/project");
//user account route
const userAccountRoute = require("./routes/user/user-account/account");

const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res, next) => {
  res.send("server is running");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// user routes
app.use("/user", userAccountRoute);
app.use("/post", blogRoutes);
app.use("/message", contactUsRoutes);
app.use("/member", teamRoutes);
app.use("/option", optionRoutes);
app.use("/project", projectRoutes);



app.use(errorHandler);

app.listen(process.env.PORT, () => {
  getConnection();
  console.log("server is running on port" + ": " + process.env.PORT);
});
