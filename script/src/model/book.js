class BookContainer extends BookAdminBase{
  constructor(parentId){
    super();

    try{
      this.target = {
        self : $(`#${parentId}`),
        book : {
          self: '',
          list: ''
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
                    <th>전자책 정가</th>
                    <th>판매가</th>
                  </tr>
                </thead>
                <tbody id="${this.id.book.list}">
                  <div ></div>
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
      await this.getBookList();

      super.initialize();
      return this;
    }catch(error){
      throw new Error(error)
    }
  }

  async render(){
    try{
      this.bind();

      this.renderBookList();

      super.render();
      return this;
    }catch(error){
      throw new Error(error)
    }
  }


  getBookList(){
    return new Promise((resolve) => {
      BookService.getBookList((result) => {
        this.view.bookList = result.data.bookList;

        resolve(this);
      })
    })
  }


  renderBookList(){
    let bookList = this.view.bookList;
    let listHtml = `
      ${bookList.reduce((previous, current, currentIndex) => {
        return `
          ${currentIndex > 0 ? previous : ''}
            <tr>
              <td>#</td>
              <td>${current.title}</td>
              <td>${current.author}</td>
              <td>${current.publisher}</td>
              <td>${current.category1}, ${current.category2}</td>
              <td>${current.price_ebook}</td>
              <td>${current.price_sale}</td>
            </tr>  
        `
      }, bookList)}
    `;

    this.target.book.list = this.target.self.find($(`#${this.id.book.list}`));
    console.log(this.target.book.list);
    this.target.book.list.html(listHtml);
  }



}