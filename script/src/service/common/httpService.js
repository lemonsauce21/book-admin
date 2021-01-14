class HttpService {
  constructor(resourceUrl, data, separator) {
    this._state = {
      resourceUrl: resourceUrl,
      data: data,
      separator: _.isUndefined(separator) ? '?' : separator
    };
    this._event = {
      succeeded: {},
      completed: {},
      failed: {},
      progressed: {}
    };
    this._triggerCallback = (event, param) => {
      if (_.isFunction(event)) {
        event(param);
      };
    };
  };

  get state() {
    return this._state;
  };

  set state(state) {
    this._state = state;
  };

  get event() {
    return this._event;
  };

  set event(event) {
    this._event = event;
  };

  getData() {
    if (_.isObject(this._state.data)) {
      this.state.resourceUrl += `${this._state.separator}${DATA_UTIL.getObjectToUriParameter(this._state.data)}`;
    };

    let _this = this;

    $.support.cors = true;

    $.ajax({
      type: 'get',
      dataType: 'json',
      url: this.state.resourceUrl,
      crossDomain: true,
      cache: true,
      contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
      timeout: 10000,
      success: (result) => {
        console.log(`request get '${_this._state.resourceUrl}' succeeded.`);

        _this._triggerCallback(_this._event.succeeded, result);
      },
      complete: (status) => {
        _this._triggerCallback(_this._event.completed, status);
      },
      error: (xhr, status, error) => {
        console.log(`request get '${_this.state.resourceUrl}' failed.`);
        console.log(xhr);

        _this._triggerCallback(_this._event.failed, xhr);

        console.log(error);
      }
    });
  };

  getHtml() {
    if (_.isObject(this._state.data)) {
      this.state.resourceUrl += `${this._state.separator}${DATA_UTIL.getObjectToUriParameter(this._state.data)}`;
    };

    let _this = this;

    $.support.cors = true;

    $.ajax({
      type: 'get',
      dataType: 'html',
      url: this.state.resourceUrl,
      crossDomain: true,
      cache: true,
      contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
      timeout: 10000,
      success: (result) => {
        console.log(`request get '${_this._state.resourceUrl}' succeeded.`);
        console.log(result);

        _this._triggerCallback(_this._event.succeeded, result);
      },
      complete: (status) => {
        _this._triggerCallback(_this._event.completed, status);
      },
      error: (xhr, status, error) => {
        console.log(`request get '${_this.state.resourceUrl}' failed.`);
        console.log(xhr);

        _this._triggerCallback(_this._event.failed, xhr);

        console.log(error);
      }
    });
  };

  getDataSync() {
    if (_.isObject(this._state.data)) {
      this.state.resourceUrl += `${this._state.separator}${DATA_UTIL.getObjectToUriParameter(this._state.data)}`;
    };

    let _this = this;

    $.support.cors = true;

    $.ajax({
      type: 'get',
      dataType: 'json',
      url: this.state.resourceUrl,
      crossDomain: true,
      cache: false,
      async: true,
      contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
      timeout: 10000,
      success: (result) => {
        console.log(`request get '${_this._state.resourceUrl}' succeeded.`);
        console.log(result);

        _this._triggerCallback(_this._event.succeeded, result);
      },
      error: (xhr, status, error) => {
        console.log(`request get '${_this.state.resourceUrl}' failed.`);
        console.log(xhr);

        _this._triggerCallback(_this._event.failed, xhr);

        console.log(error);
      }
    });
  };

  getDataSyncJsonp(callback) {
    if (_.isObject(this._state.data)) {
      this.state.resourceUrl += `${this._state.separator}${DATA_UTIL.getObjectToUriParameter(this._state.data)}`;
    };

    let _this = this;

    $.support.cors = true;

    $.ajax({
      type: 'get',
      dataType: 'jsonp',
      url: this.state.resourceUrl,
      jsonpCallback: callback,
      crossDomain: true,
      cache: false,
      async: true,
      contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
      timeout: 10000,
      success: (result) => {
        console.log(`request get '${_this._state.resourceUrl}' succeeded.`);
        console.log(result);

        _this._triggerCallback(_this._event.succeeded, result);
      },
      error: (xhr, status, error) => {
        console.log(`request get '${_this.state.resourceUrl}' failed.`);
        console.log(xhr);

        _this._triggerCallback(_this._event.failed, xhr);

        console.log(error);
      }
    });
  };

  postData() {
    let _this = this;

    $.support.cors = true;

    $.ajax({
      type: 'post',
      dataType: 'json',
      url: this.state.resourceUrl,
      data: JSON.stringify(this._state.data),
      crossDomain: true,
      cache: true,
      contentType: 'application/json',
      timeout: 10000,
      success: (result) => {
        console.log(`request post '${_this._state.resourceUrl}' succeeded.`);
        console.log(result);

        _this._triggerCallback(_this._event.succeeded, result);
      },
      error: (xhr, status, error) => {
        console.log(`request post '${_this.state.resourceUrl}' failed.`);
        console.log(xhr);

        _this._triggerCallback(_this._event.failed, xhr);

        console.log(error);
      }
    });
  };

  putData() {
    let _this = this;

    $.support.cors = true;

    $.ajax({
      type: 'put',
      dataType: 'json',
      data : JSON.stringify(this._state.data),
      url: this.state.resourceUrl,
      crossDomain: true,
      cache: false,
      contentType: 'application/json;charset=UTF-8',
      success: (result) => {
        console.log(`request put '${_this._state.resourceUrl}' succeeded.`);
        console.log(result);

        _this._triggerCallback(_this._event.succeeded, result);
      },
      error: (xhr, status, error) => {
        console.log(`request put '${_this.state.resourceUrl}' failed.`);
        console.log(xhr);

        _this._triggerCallback(_this._event.failed, status);

        console.log(error);
      }
    });
  };

  deleteData() {
    let _this = this;

    $.support.cors = true;

    $.ajax({
      type: 'delete',
      dataType: 'json',
      url: this.state.resourceUrl,
      crossDomain: true,
      cache: false,
      contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
      timeout: 2000,
      success: (result) => {
        console.log(`request get '${_this._state.resourceUrl}' succeeded.`);
        console.log(result);

        _this._triggerCallback(_this._event.succeeded, result);
      },
      error: (xhr, status, error) => {
        console.log(`request get '${_this.state.resourceUrl}' failed.`);
        console.log(xhr);

        _this._triggerCallback(_this._event.failed, status);

        console.log(error);
      }
    });
  }

  putFile() {
    let _this = this;

    $.support.cors = true;

    $.ajax({
      headers: {
        'Content-Type': 'binary/octet-stream'
      },
      type: 'put',
      url: this.state.resourceUrl,
      contentType: 'binary/octet-stream',
      data: this._state.data,
      processData: false,
      success: (result) => {
        console.log(`request put '${_this._state.resourceUrl}' succeeded.`);
        console.log(result);

        _this._triggerCallback(_this._event.succeeded, result);
      },
      error: (xhr, status, error) => {
        console.log(`request put '${_this.state.resourceUrl}' failed.`);
        console.log(xhr);

        _this._triggerCallback(_this._event.failed, xhr);

        console.log(error);
      },
      xhr: () => {
        let xhr = new XMLHttpRequest();

        xhr.upload.addEventListener('progress', (event) => {
          if (event.lengthComputable) {
            let rate = event.loaded / event.total;
            LOG_UTIL.log(`request put '${rate * 100}%' progressed.`);

            _this._triggerCallback(_this._event.progressed, event.loaded / event.total);
          }

        }, false);

        return xhr;
      }
    });
  };

  postFile() {
    let _this = this;

    $.support.cors = true;

    $.ajax({
      type: 'post',
      data: this._state.data,
      url: this.state.resourceUrl,
      processData: false,
      crossDomain: true,
      contentType: false,
      success: (result) => {
        console.log(`request post file '${_this._state.resourceUrl}' succeeded.`);
        console.log(result);

        _this._triggerCallback(_this._event.succeeded, result);
      },
      error: (xhr, status, error) => {
        console.log(`request post file '${_this.state.resourceUrl}' failed.`);
        console.log(xhr);

        _this._triggerCallback(_this._event.failed, xhr);

        console.log(error);
      }
    });
  };
};