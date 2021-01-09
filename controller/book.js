'use strict';

const view = {
    list : (req, res) => {
        res.render('book', { title : '책 리스트' });
    }
};

const api = {
    /*list
    create
    delete
    Edit*/
};

module.exports = {
    view : {
        list : view.list
    }
};