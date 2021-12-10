const Engineer = require("../lib/Engineer")

test("Can set gitHubUser via constructor argumemt", () => {
    const testValue = "gitHubUser"
    const e = new Engineer("Foo", 1, "test@test.com", testValue)
    expect(e.gitHubUser).toBe(testValue)
})

test("Can set role via constructor argument", () => {
    const testValue = "Engineer"
    const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser", testValue)
    expect(e.role).toBe(testValue)
})

test("getGitHub() should return gitHubUser", () => {
    const testValue = "gitHubUser"
    const e = new Engineer("Foo", 1, "test@test.com", testValue)
    expect(e.getGitHub()).toBe(testValue)
});

test("getRole() should return 'Engineer'", () => {
    const testValue = "Engineer"
    const e = new Engineer("Foo", 1, "test@test.com", testValue)
    expect(e.getRole()).toBe(testValue)
});