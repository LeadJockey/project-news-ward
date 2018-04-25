const mongoose = require('mongoose');
const uuid = require('uuid/v4');
const Schema = mongoose.Schema;
const postModel = {
  _id:uuid(),
  author:{ type:String },
  title:{ type:String },
  category:{ type:String, default:'etc' },
  hashTag:{ type:String, default:'etc' },
  content:{ type:String, default:'' },
  img:{ type:String, default:'no_img' },
  like:{ type:Number, default:0 },
  dislike:{ type:Number, default:0 },
  ward:{ type:Number, default:0 },
  hit:{ type:Number, default:0 },
  createdDate:{ type:Date, default:Date.now },
  updatedDate:{ type:Date, default:Date.now },
  articles:[],
  comments:[],
};
const postSchema = new Schema(postModel);

module.exports = mongoose.model('post', postSchema);