class BookService{
  static getBookList(callback){
    let httpService = new HttpService('/book/api/list');

    httpService.event.failed = (error) => {
      callback(error);
    };

    httpService.event.succeeded = (result) => {
      callback(result);
    };

    httpService.getData();
  }

}


