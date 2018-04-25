const mongoose = require('mongoose');
const uuid = require('uuid/v4');
const Schema = mongoose.Schema;
const commentModel = {
  _id:uuid(),
  _postId:{ type:String, required:true },
  author:{ type:String },
  comment:{ type:String, default:'' },
  like:{ type:Number, default:0 },
  dislike:{ type:Number, default:0 },
  createdDate:{ type:Date, default:Date.now }
};
const commentSchema = new Schema(commentModel);

module.exports = mongoose.model('comment', commentSchema);