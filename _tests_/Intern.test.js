const Intern = require("../lib/Intern")

test("Can set school via constructor argumemt", () => {
    const testValue = "UCDavis"
    const e = new Intern("Foo", 1, "test@test.com", testValue)
    expect(e.school).toBe(testValue)
})

test("getSchool() should return school", () => {
    const testValue = "UCDavis"
    const e = new Intern("Foo", 1, "test@test.com", testValue)
    expect(e.getSchool()).toBe(testValue)
});

test("getRole() should return 'Intern'", () => {
    const testValue = "Intern"
    const e = new Intern("Foo", 1, "test@test.com", testValue)
    expect(e.getRole()).toBe(testValue)
});