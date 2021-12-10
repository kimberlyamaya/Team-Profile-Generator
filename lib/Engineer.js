const Employee = require("./Employee");

class Engineer extends Employee {
     constructor(name, id, email, gitHubUser, role) {
        super (name, id, email)
        this.gitHubUser = gitHubUser
        this.role = role
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