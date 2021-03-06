const UserService = require('./../../app/service/UserService')

describe("Test for userservice", () => {
	test("Create a new user using the UserService", () => {
		const user = UserService.create(1, "brandlop", "Brandon");

		expect(user.id).toBe(1)
		expect(user.username).toBe("brandlop")
		expect(user.name).toBe("Brandon")
		expect(user.bio).not.toBeUndefined()
	});

	test("Get all user data in a list", () => {
		const user = UserService.create(1, "brandlop", "Brandon");
		const userInfoInList = UserService.getInfo(user)

		expect(userInfoInList[0]).toBe(1)
		expect(userInfoInList[1]).toBe("brandlop")
		expect(userInfoInList[2]).toBe("Brandon")
		expect(userInfoInList[3]).toBe("Sin bio")
	});

	test("Update username", () => {
		const user = UserService.create(1, "brandlop", "Brandon");

		UserService.updateUsername(user, "brandlp")

		expect(user.username).toBe("brandlp")
		
	});

	test("Given a list of users give me the list of usernames", () => {
		const user1 = UserService.create(1, "brandlop1", "Brandon")
		const user2 = UserService.create(1, "brandlop2", "Brandon")
		const user3 = UserService.create(1, "brandlop3", "Brandon")
		const usernames = UserService.getAllUsernames([user1, user2, user3])

		expect(usernames).toContain("brandlop1")
		expect(usernames).toContain("brandlop2")
		expect(usernames).toContain("brandlop3")

	});
});