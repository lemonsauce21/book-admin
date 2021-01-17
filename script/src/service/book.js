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


  static insertBook(jsonData, callback){
    let httpService = new HttpService('/book/api/', jsonData);

    httpService.event.failed = (error) => {
      callback(error);
    };

    httpService.event.succeeded = (result) => {
      callback(result);
    };

    httpService.postData();
  }


  static updateBook(id, jsonData, callback){
    let httpService = new HttpService(`/book/api/${id}`, jsonData);

    httpService.event.failed = (error) => {
      console.log(error.toString());
      callback(error);
    };

    httpService.event.succeeded = (result) => {
      callback(result);
    };

    httpService.putData();
  }


  static deleteBook(id, callback){
    let httpService = new HttpService(`/book/api/${id}`);

    httpService.event.failed = (error) => {
      console.log(error.toString());
      callback(error);
    };

    httpService.event.succeeded = (result) => {
      callback(result);
    };

    httpService.deleteData();
  }

}


