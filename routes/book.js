var express = require('express');
var router = express.Router();

const bookController = require('../controller/book');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource / this is root');
});

/* view : 도서 목록 */
router.get('/list', bookController.view.list);

/* api */
//목록조회
router.get('/api/list', bookController.api.list);

//도서 정보 수정
router.put('/api/:_id', bookController.api.update);

//도서 정보 생성
//router.post('/api/', bookController.api.create);


module.exports = router;

