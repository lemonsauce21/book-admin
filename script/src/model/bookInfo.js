class bookInfo extends BookAdminBase{
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
        bookInfo : {
          self : 'bookAdmin-bookinfo-self',
          title : 'bookAdmin-bookinfo-title',
          author : 'bookAdmin-bookinfo-author',
          publisher : 'bookAdmin-bookinfo-publisher',
          category1 : 'bookAdmin-bookinfo-category1',
          category2 : 'bookAdmin-bookinfo-category2',
          image_url : 'bookAdmin-bookinfo-image_url',
          price_paper : 'bookAdmin-bookinfo-price_paper',
          price_ebook : 'bookAdmin-bookinfo-price_ebook',
          price_sale : 'bookAdmin-bookinfo-price_sale',
          discount_paper : 'bookAdmin-bookinfo-discount_paper',
          discount_ebook : 'bookAdmin-bookinfo-discount_ebook',
          discount_sale : 'bookAdmin-bookinfo-discount_sale'
        },
        save : 'bookAdmin-bookinfo-save'
      };

      this.view = {
        bookInfo : {
          title : '',
          author : '',
          publisher : '',
          category1 : '',
          category2 : '',
          image_url : '',
          price_paper : '',
          price_ebook : '',
          price_sale : '',
          discount_paper : '0',
          discount_ebook : '0',
          discount_sale : '0'
        }
      };

      this.bind = () => {
        this.target.self.html(`
          <div id="${this.id.self}">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header" style="text-align: center">
                  <h3 class="modal-title"><strong>${this.view.bookInfo.title} 상세정보</strong></h3>
                </div>
                <div class="modal-body form-horizontal">
                <!--작업중 : 이미지 추가-->
                  <div class="form-group">
                    <label>제목</label><input type="text" class="form-control" id="${this.id.bookInfo.title}" value="${this.view.bookInfo.title}">
                  </div>
                  <div class="form-group">
                    <label>저자</label><input type="text" class="form-control" id="${this.id.bookInfo.author}" value="${this.view.bookInfo.author}">
                  </div>
                  <div class="form-group">
                    <label>출판사</label><input type="text" class="form-control" id="${this.id.bookInfo.publisher}" value="${this.view.bookInfo.publisher}">
                  </div>
                  <div class="form-group">
                    <label>카테고리1</label><input type="text" class="form-control" id="${this.id.bookInfo.category1}" value="${this.view.bookInfo.category1}">
                  </div>
                  <div class="form-group">
                    <label>카테고리2</label><input type="text" class="form-control" id="${this.id.bookInfo.category2}" value="${this.view.bookInfo.category2}">
                  </div>                
                  <div class="form-group">
                    <label>종이책 정가</label><input type="text" class="form-control" id="${this.id.bookInfo.price_paper}" value="${this.view.bookInfo.price_paper}">
                  </div>
                  <div class="form-group">
                    <label>전자책 정가</label><input type="text" class="form-control" id="${this.id.bookInfo.price_ebook}" value="${this.view.bookInfo.price_ebook}">
                  </div>
                  <div class="form-group">
                    <label>판매가</label><input type="text" class="form-control" id="${this.id.bookInfo.price_sale}" value="${this.view.bookInfo.price_sale}">
                  </div>                             
                  <div class="form-group">
                    <label>종이책 할인률</label><input type="text" class="form-control" id="${this.id.bookInfo.discount_paper}" value="${this.view.bookInfo.discount_paper}">
                  </div>
                  <div class="form-group">
                    <label>전자책 할인률</label><input type="text" class="form-control" id="${this.id.bookInfo.discount_ebook}" value="${this.view.bookInfo.discount_ebook}">
                  </div>
                  <div class="form-group">
                    <label>판매가 할인률</label><input type="text" class="form-control" id="${this.id.bookInfo.discount_sale}" value="${this.view.bookInfo.discount_sale}">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-sm btn-white"  data-dismiss="modal"><i class="fa fa-upload"></i><span class="bold">닫기</span></button>
                  <button type="button" class="btn btn-sm btn-info" id="${this.id.save}"><i class="fa fa-upload"></i><span class="bold">저장</span></button>
                </div>
              </div>
            </div>
          </div>
        `);
        
        this.target.self.off();

        //저장 클릭 : 신규, 수정 분기
        this.target.self.on('click', `#${this.id.save}`, (event) => {
          if(_.isUndefined(this.view.bookInfo._id)) {
            this.insertBook();
          }
          else {
            this.updateBook();
          }
        });
      };

    }catch(error){
      throw new Error(error)
    }
  };


  async initialize(info){
    try{
      if(!_.isUndefined(info)){
        this.view.bookInfo = info;
      }

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


  /**
   * 신규
   */
  insertBook(){
    BookService.insertBook(this.setInfo(), (result) => {
      if(!_.isUndefined(result.status) && result.status === 200){
        alert("정상 처리되었습니다.");
        window.location.reload();
        return false;
      }else{
        alert(`정보 입력에 실패하였습니다.[${result}]`);
      }
    });
  }


  /**
   * 수정
   */
  updateBook(){
    BookService.updateBook(this.view.bookInfo._id, this.setInfo(), (result) => {
      if(!_.isUndefined(result.status) && result.status === 200){
        alert("정상 처리되었습니다.");
        window.location.reload();
        return false;
      }else{
        alert(`정보 수정에 실패하였습니다.(${result})`);
      }
    });
  };

  setInfo(){
    let jsonData = {
      title : $(`#${this.id.bookInfo.title}`).val(),
      author : $(`#${this.id.bookInfo.author}`).val(),
      publisher : $(`#${this.id.bookInfo.publisher}`).val(),
      category1 : $(`#${this.id.bookInfo.category1}`).val(),
      category2 : $(`#${this.id.bookInfo.category2}`).val(),
      image_url : $(`#${this.id.bookInfo.image_url}`).val(),
      price_paper : $(`#${this.id.bookInfo.price_paper}`).val(),
      price_ebook : $(`#${this.id.bookInfo.price_ebook}`).val(),
      price_sale : $(`#${this.id.bookInfo.price_sale}`).val(),
      discount_paper : _.isEmpty($(`#${this.id.bookInfo.discount_paper}`).val()) ? 0 : $(`#${this.id.bookInfo.discount_paper}`).val(),
      discount_ebook : _.isEmpty($(`#${this.id.bookInfo.discount_ebook}`).val()) ? 0 : $(`#${this.id.bookInfo.discount_ebook}`).val(),
      discount_sale : _.isEmpty($(`#${this.id.bookInfo.discount_sale}`).val()) ? 0 : $(`#${this.id.bookInfo.discount_sale}`).val()
    };
    return jsonData;
  }

}