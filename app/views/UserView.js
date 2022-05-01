const UserService = require('./../service/UserService')

class UserView {
  static createUser(payload){
    if (payload === null) {
      return {
        error: 'payload does not exist'
      }
    }
    else {
      return {
        error: 'It is necessary to have a defined value'
      }
    }
  }
}

module.exports = UserView