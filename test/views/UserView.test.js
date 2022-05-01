const UserView = require('./../../app/views/UserView')

describe("Tests for UserView", () => {
  test("Return an error object when try to create a new user with null payload", () => {
    const payload = null

    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/payload does not exist/)
  })

  test("Return an error object when try to create a new user with a payload with invalid properties", () => {
    const payload = {username: null, name: 12, id:"id"}

    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/It is necessary to have a defined value/)
  })

  test("Return an error object when try to create a new user with a payload with missing properties", () => {
    const payload = {username: "username"}

    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/It is necessary to have a defined value/)
  })
})