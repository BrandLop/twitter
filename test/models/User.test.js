const User = require("./../../app/models/User");

describe("Unit test for user class", () => {
  test("Create an user object", () => {
    const user = new User(
      1,
      "brandlop",
      "Brandon",
      "Bio",
      "dateCreated",
      "lastUpdated"
    );

    expect(user.id).toBe(1);
    expect(user.username).toBe("brandlop");
    expect(user.name).toBe("Brandon");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).toBe("dateCreated");
    expect(user.lastUpdated).toBe("lastUpdated");
  });
});
