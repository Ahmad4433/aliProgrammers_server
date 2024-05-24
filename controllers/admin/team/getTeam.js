const TeamMebmer = require("../../../models/TeamMebmer");
const getTeam = async (req, res, next) => {
  try {
    const teamList = await TeamMebmer.find();

    res.status(200).json({ message: "success", status: true, list: teamList });
  } catch (error) {
    next(error);
  }
};
module.exports = getTeam;
