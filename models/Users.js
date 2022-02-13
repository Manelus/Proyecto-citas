const UserSchema = require('./schema/Users');
const mongoose = require('mongoose');
const UserModel = mongoose.model("User", UserSchema);




module.exports = UserModel;