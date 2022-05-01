class UserView {
  static createUser(payload){
    if (payload === null) {
      return {
        error: 'payload does not exist'
      }
    }
  }
}

module.exports = UserView