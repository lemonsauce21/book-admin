'use strict';

const mongoose = require('mongoose');
const bookSchema = require('../model/book');
const _ = require('lodash');
const ObjectId = mongoose.Types.ObjectId;

class BookService{
  static getBookList(callback){
    let query = bookSchema.find();

    query.exec((err, bookList) => {
      callback(err, bookList);
    });
  }

  static updateBook(_id, params, cb) {
    console.log("service in" + _id);
    console.log(params);

    let query = bookSchema.updateOne(
      {
        _id: new ObjectId(_id)
      },
      {
        $set: params
      }
    );
    query.exec((err, result) => {
      cb(err, result);
    });
  }

}

module.exports = BookService;