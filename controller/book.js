'use strict';

const ResultMessage = require('../lib/resultMessage');
const BookService = require('../service/bookService');

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
                console.log("controller-list : " + err);

                res.status(500);
                res.send(ResultMessage.ServerError());
            }else{
                res.send(ResultMessage.Success({
                    bookList : bookList
                }));
            }
        })
    }
    /*list
    create
    delete
    Edit*/
};

module.exports = {
    view : {
        list : view.list
    },
    api : {
        list : api.list
    }
};