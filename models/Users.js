const UserSchema = require('./schema/Users');
const UserModel = mongoose.model("User", UserSchema);




module.exports = UserModel;