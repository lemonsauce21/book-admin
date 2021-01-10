const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title : {type : String},
  author : {type : String},
  publisher : {type : String},
  category1 : {type : String},
  category2 : {type : String},
  image_url : {type : String},
  price_paper : {type : String},
  price_ebook : {type : String},
  price_sale : {type : String},
  discount_paper : {type : String},
  discount_ebook : {type : String},
  discount_sale : {type : String}

});

bookSchema.set('collection', 'book');

module.exports = mongoose.model('book', bookSchema);