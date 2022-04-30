const User = require("./../../app/models/User");

describe("Unit test for user class", () => {
  test("Create an user object", () => {
    const user = new User(
      1,
      "brandlop",
      "Brandon",
      "Bio"
    );

    expect(user.id).toBe(1);
    expect(user.username).toBe("brandlop");
    expect(user.name).toBe("Brandon");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined(); 
  });

	test("Adding getters", () => {
		const user = new User(
      1,
      "brandlop",
      "Brandon",
      "Bio"
    );

		expect(user.getUsername).toBe("brandlop");
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
	});
});
