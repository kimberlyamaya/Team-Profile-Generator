const Manager = require("../lib/Manager")

test("Can set officeNumber via constructor argumemt", () => {
    const testValue = 100
    const e = new Manager("Foo", 1, "test@test.com", testValue)
    expect(e.officeNumber).toBe(testValue)
});

test("Can set role via constructor argument", () => {
    const testValue = "Manager"
    const e = new Manager("Foo", 1, "test@test.com", 100, testValue)
    expect(e.role).toBe(testValue)
})

test("getOfficeNumber() should return officeNumber", () => {
    const testValue = 100
    const e = new Manager("Foo", 1, "test@test.com", testValue)
    expect(e.getOfficeNumber()).toBe(testValue)
});

test("getRole() should return 'Manager'", () => {
    const testValue = "Manager"
    const e = new Manager("Foo", 1, "test@test.com", 100)
    expect(e.getRole()).toBe(testValue)
});