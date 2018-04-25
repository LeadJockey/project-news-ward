const mongoose = require('mongoose');
const uuid = require('uuid/v4');
const Schema = mongoose.Schema;
const userModel = {
  _id:uuid(),
  userId:{ type:String, required:[true, 'you have to insert id'], trim:true, unique:[true, 'nested id'], },
  userPwd:{ type:String, required:[true, 'you have to insert password'], trim:true },
  createdDate:{ type:Date, default:Date.now },
  updatedDate:{ type:Date, default:Date.now },
  scraps:[],
  likes:[],
  dislikes:[],
  wards:[],
  posts:[],
  comments:[]
};
const userSchema = new Schema(userModel);

module.exports = mongoose.model('user', userSchema);