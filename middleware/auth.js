const jwt = require("jsonwebtoken");
const {usuarios} = require('../models');;

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = jwt.verify(token, process.env.JWT_SECRET);
    const user = await usuarios.findAll({
      where:{
        id:data.id
      }
    });
    if (!user) {
      res.status(401).json({error: "Not authorized to access this resource"});
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(500).json("Internal error");
  }
};
module.exports = auth;
