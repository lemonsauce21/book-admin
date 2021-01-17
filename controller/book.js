'use strict';

const ResultMessage = require('../lib/resultMessage');
const BookService = require('../service/bookService');
let _ = require('lodash');

const view = {
  list : (req, res) => {
    res.render('book', { title : '책 리스트' });
  }
};

const api = {
  list : (req, res) => {
    let params = {};    //검색용

    BookService.getBookList((err, bookList) => {
      if(err){
        console.log(err);

        res.status(500);
        res.send(ResultMessage.ServerError());
      }else{
        res.send(ResultMessage.Success({
          bookList : bookList
        }));
      }
    })
  },
  update : (req, res) => {
    let _id = req.params._id.trim();
    let params = req.body;

    if(_.isUndefined(_id) || _.isEmpty(_id)){
      res.send(ResultMessage.BadRequest(`The "_id" Parameter Is Incorrect`));
      return false;
    };

    if(_.isUndefined(params) || _.isEmpty(params)){
      res.send(ResultMessage.BadRequest(`The "params" Parameter Is Incorrect`));
      return false;
    };

    BookService.updateBook(_id, params, (err, cb) => {
      if(err){
        console.log(err);

        res.status(500);
        res.json(ResultMessage.ServerError());
      }else{
        res.json(ResultMessage.Success(cb));
      }
    });
  },
  create : (req, res) => {
    let params = req.body;

    BookService.insertBook(params, (err, cb) => {
      if(err){
        console.log(err);

        res.status(500);
        res.json(ResultMessage.ServerError());
      }else{
        res.json(ResultMessage.Success(cb));
      }
    });
  },
  destroy : (req, res) => {
    let _id = req.params._id.trim();

    if(_.isUndefined(_id) || _.isEmpty(_id)){
      res.send(ResultMessage.BadRequest(`The "_id" Parameter Is Incorrect`));
      return false;
    };

    let params = {
      _id : _id
    }

    BookService.deleteBook(params, (err, cb) => {
      if(err){
        console.log(err);

        res.status(500);
        res.json(ResultMessage.ServerError());
      }else{
        res.json(ResultMessage.Success(cb));
      }
    });
  }
};

module.exports = {
  view : {
    list : view.list
  },
  api : {
    list : api.list,
    update : api.update,
    create : api.create,
    destroy : api.destroy
  }
};