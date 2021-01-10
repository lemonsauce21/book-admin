class BookContainer extends BookAdminBase{
  constructor(parentId){
    super();

    try{
      this.target = {
        self : $(`#${parentId}`),
        book : {
          self : {},
          list : {}
          //나중에 검색부분
        }
      };

      this.id = {
        self : $(`#${parentId}`),
        book : {
          self : 'bookAdmin-book-self',
          list : 'bookAdmin-book-list'
        }
      };

      this.view = {
        bookList : {}
      };

      this.bind = () => {
        this.target.self.html(`
          <div class="col-sm-3 col-sm-offset-3 col-md-10 col-md-offset-2 col-md-10 col-md-offset-2 main">
            <h1 class="page-header">도서 목록</h1>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>제목</th>
                    <th>저자</th>
                    <th>출판사</th>
                    <th>카테고리</th>
                    <th>종이책 정가</th>
                    <th>판매가</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>amet</td>
                    <td>consectetur</td>
                    <td>adipiscing</td>
                    <td>elit</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>Integer</td>
                    <td>nec</td>
                    <td>odio</td>
                    <td>Praesent</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>libero</td>
                    <td>Sed</td>
                    <td>cursus</td>
                    <td>ante</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        
        `);
      };

    }catch(error){
      throw new Error(error)
    }

  };

  async initialize(){
    try{
      this.getBookList();

      super.initialize();
      return this;
    }catch(error){
      throw new Error(error)
    }
  }

  async render(){
    try{
      this.bind();
      super.render();
      return this;
    }catch(error){
      throw new Error(error)
    }
  }


  renderBookList(){
    let target = $(`#${this.target.book.list}`);
    let bookList = this.view.bookList;

  }

  getBookList(){
    this.view.bookList = "contentcontent";
  }


}