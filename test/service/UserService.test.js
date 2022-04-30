const UserService = require('./../../app/service/UserService')

describe("Test for userservice", () => {
	test("Create a new user using the UserService", () => {
		const user = UserService.create(1, "brandlop", "Brandon");

		expect(user.id).toBe(1)
		expect(user.username).toBe("brandlop")
		expect(user.name).toBe("Brandon")
		expect(user.bio).not.toBeUndefined()
	});
});