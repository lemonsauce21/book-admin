/**
 * 데이터 지원 유틸리티 생성자
 * @static
 */
class DATA_UTIL {
  static getObjectToUriParameter(data) {
    if (_.isObject(data)) {
      var uriParameter = '';

      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          uriParameter += key + '=' + encodeURIComponent(data[key]) + '&';
        };
      };

      if (uriParameter.length > 0) {
        uriParameter = uriParameter.substring(0, uriParameter.length - 1);
      };

      return uriParameter;
    }
    else {
      throw new TypeError('매개변수가 Object 타입이 아닙니다.');
    };
  };

  static getJsonToPrettyHtml(data) {
    if (_.isObject(data)) {
      data = JSON.stringify(data, undefined, 2);

      data = data.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

      return data.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key';
          }
          else {
            cls = 'string';
          }
        }
        else if (/true|false/.test(match)) {
          cls = 'boolean';
        }
        else if (/null/.test(match)) {
          cls = 'null';
        };

        return '<span class="' + cls + '">' + match + '</span>';
      });
    }
    else {
      throw new TypeError('매개변수가 Object 타입이 아닙니다.');
    };
  };

  static isNullOrUndefined(object) {
    return (object === null) || _.isUndefined(object);
  };

  static isNumber(value) {
    let regexp = /[^[0-9]/gi;
    if (regexp.test(value)) {
      return false;
    }
    return true;
  };

  static isTrueOrFalse(object) {
    if (_.isString(object)) {
      return object === 'true';
    }
    else if (_.isBoolean(object)) {
      return object;
    }
    else {
      return false;
    };
  };

  static validateEmail(email) {
    let regexp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regexp.test(email);
  }
};