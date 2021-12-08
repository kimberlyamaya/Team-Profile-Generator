const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHubUser) {
        super (name, id, email)
        this.gitHubUser = gitHubUser
    }

    //get gitHub
    getGitHub() {
        return this.gitHubUser
    }

    //get Role
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;