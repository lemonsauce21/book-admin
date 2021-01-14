'use strict';

const mongoose = require('mongoose');
const bookSchema = require('../model/book');
const _ = require('lodash');

class BookService{
  static getBookList(callback){
    let query = bookSchema.find();

    query.exec((err, bookList) => {
      callback(err, bookList);
    });
  }

}

module.exports = BookService;