const UserService = require('./../service/UserService')

class UserView {
  static createUser(payload){
    if (payload === null) {
      return {
        error: 'payload does not exist'
      }
    } else if (typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number' ) {
      return UserService.create(payload.id,payload.username, payload.name)
    } else {
      return {
        error: 'It is necessary to have a defined value'
      }
    }
  }
}

module.exports = UserView