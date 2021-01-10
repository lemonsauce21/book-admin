class BookAdminBase {
  constructor(parentId) {
    this._id = {};
    this._target = {};
    this._view = {};
    this._state = {
      previousScroll : 0
    };
    this._model = {};
    this._event = {
      initialized: (event) => {
        //console.log(`'${this.id.self}' has been initialized.`);
      },
      rendered: (event) => {
        //console.log(`'${this.id.self}' has been rendered.`);
      }
    };
    this._triggerCallback = (event, param) => {
      if (_.isFunction(event)) {
        event(param);
      };
    };

    this._bind = () => {
    };

    $(window).resize(() => {
      this.resized({
        windowInnerWidth: window.innerWidth
      });
    });

    $(window).on('hashchange', (event) => {
      this.hashChanged(event);
    });

    $(window).scroll(() => {
      this.scrolled({
        documentScrollTop: $(document).scrollTop(),
        isScrollDown : $(document).scrollTop() > this.state.previousScroll ? true : false,
        isScrollUp : $(document).scrollTop() > this.state.previousScroll ? false : true,
        isDocumentBottom : $(window).scrollTop() >= $(document).height() - $(window).height()
      });

      this.state.previousScroll = $(document).scrollTop();
    });
  };

  get id() {
    return this._id;
  };

  set id(id) {
    this._id = id;
  };

  get target() {
    return this._target;
  };

  set target(target) {
    this._target = target;
  };

  get view() {
    return this._view;
  };

  set view(view) {
    this._view = view;
  };

  get state() {
    return this._state;
  };

  set state(state) {
    this._state = state;
  };

  get model() {
    return this._model;
  };

  set model(model) {
    this._model = model;
  };

  get event() {
    return this._event;
  };

  set event(event) {
    this._event = event;
  };

  get bind() {
    return this._bind;
  };

  set bind(handler) {
    this._bind = handler;
  };

  initialize(event) {
    this._event.initialized(event);
  };

  render(event) {
    this._event.rendered(event);
  };

  hashChanged(event) {};

  resized(event) {};

  scrolled(event) {};
};