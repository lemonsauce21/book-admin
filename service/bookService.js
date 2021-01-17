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

  static updateBook(_id, params, callback) {
    let query = bookSchema.updateOne(
      {
        _id: new ObjectId(_id)
      },
      {
        $set: params
      }
    );
    query.exec((err, result) => {
      callback(err, result);
    });
  }

  static insertBook(params, callback) {
    let query = new bookSchema(params);
    query.save((err, result) => {
      callback(err, result);
    });
  };

  static deleteBook(params, callback) {
    let query = bookSchema.deleteOne(
      {
        _id: params._id
      }
    );

    query.exec((err, result) => {
      callback(err, result);
    });
  }

}

module.exports = BookService;