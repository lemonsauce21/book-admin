var express = require('express');
var router = express.Router();

const bookController = require('../controller/book');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource / this is root');
});

/* view : 책 목록리스트 */
router.get('/list', bookController.view.list);

/* api */
router.get('/api/list', bookController.api.list);

module.exports = router;

