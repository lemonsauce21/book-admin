'use strict';

/**
 * rest api result
 * @class ResultMessage
 */
class ResultMessage {
  constructor(status, desc, data) {
    this.status = status || "200";
    this.timestamp = new Date().getTime();
    this.desc = desc || "";
    this.data = data || {};
  }

  static Success (data) {
    return new ResultMessage(200, 'success', data || 'success');
  }

  static BadRequest (data) {
    return new ResultMessage(400, 'Bad Request', data || '잘못된 요청 입니다.');
  }

  static Unauthorized (data) {
    return new ResultMessage(401, 'Unauthorized', data || '로그인에 실패했습니다.');
  }

  static IPRejected (data) {
    return new ResultMessage(403, 'IP geolocation rejected', data || '지역 접속 거부되었습니다.');
  }

  static SourceAccessDenied (data) {
    return new ResultMessage(403, 'Source access denied', data || '소스 액세스가 거부되었습니다.');
  }

  static NotFound (data) {
    return new ResultMessage(404, 'Not Found', data || '해당 내용을 찾을 수 없습니다.');
  }

  static DuplicateID (data) {
    return new ResultMessage(409, 'Identifier Exists', data || '이미 가입한 회원 입니다.');
  }

  static SignupRequired (data) {
    return new ResultMessage(409, 'Signup required', data || '회원 가입이 필요 합니다.');
  }

  static ServerError (data) {
    return new ResultMessage(500, 'Internal Server Error', data || '잘못된 요청 입니다.');
  }

  static DBConnError (data) {
    return new ResultMessage(500, 'DB Connection Error', data || 'DB Connection Error');
  }
}

module.exports = ResultMessage;