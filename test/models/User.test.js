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
});
