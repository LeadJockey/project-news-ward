const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const userModel  = {
	userId:'',
	userPwd:'',
	createdDate:'',
	updatedDate:'',
};
const userSchema = new Schema(userModel);

module.exports = mongoose.model('user', userSchema);