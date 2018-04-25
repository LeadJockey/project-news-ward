const uuid4 = require('uuid/v4');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const articleModel = {
  _id:uuid4(),
  title:{ type:String },
  source:{ type:String },
  desc:{ type:String },
  url:{ type:String },
  img:{ type:String },
  publishedAt:{ type:String },
  scrapAt:{ type:Date, default:Date.now }
};
const articleSchema = new Schema(articleModel);

module.exports = mongoose.model('article', articleSchema);
