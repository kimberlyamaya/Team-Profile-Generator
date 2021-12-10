const inquirer = require('inquirer');
const fs = require("fs");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeArr = []

// prompt to enter the team manager’s name, employee ID, email address, and office number
function addManager() {
    return inquirer
        .prompt([
        {
        type: "input",
        name: "name",
        message: "Enter Manager's Name"
        },
        {
        type: "input",
        name: "id",
        message: "Enter Manager's Employee ID"
        },
        {
        type: "input",
        name: "email",
        message: "Enter Manager's Email Address"
        },
        {
        type: "input",
        name: "officeNumber",
        message: "Enter Manager's Office Number"   
        },
        {
        // presented with a menu with the option to add an engineer or an intern or to Finished building Team?
        type: "list",
        name: "addNewMember",
        message: "What are your next steps?",
        choices: ["Add an Engineer", "Add an Intern", "Finished building Team?"]
        }
        ])
        .then(function (answers) {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            employeeArr.push(manager)
            console.log(employeeArr)

            // engineer option was selected then prompt to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
            if (answers.addNewMember === "Add an Engineer") {
                // call addEngineer function and
                addEngineer()
                // create new engineer with class and push into new employeeArr
                //const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHubUser)
                //employeeArr.push(engineer)
                //console.log(employeeArr)
            }

            // intern option was selected then prompt to enter the intern’s name, ID, email, and school, and I am taken back to the menu
            if (answers.addNewMember === "Add an Intern") {
                addIntern()
            }

            // Finished building Team? was selected, the HTML is generated
            if (answers.addNewMember === "Finished building Team?") {
                init(employeeArr)
            }

        })
}



// prompt to enter the engineer's name, employee ID, email address, and github user
function addEngineer() {
    return inquirer
        .prompt([
        {
        type: "input",
        name: "name",
        message: "Enter Engineer's Name"
        },
        {
        type: "input",
        name: "id",
        message: "Enter Engineer's Employee ID"
        },
        {
        type: "input",
        name: "email",
        message: "Enter Engineer's Email Address"
        },
        {
        type: "input",
        name: "gitHubUser",
        message: "Enter Engineer's GitHub Username"   
        },
        {
        // presented with a menu with the option to add an engineer or an intern or to Finished building Team?
        type: "list",
        name: "addNewMember",
        message: "What are your next steps?",
        choices: ["Add an Engineer", "Add an Intern", "Finished building Team?"]
        }
        ])
        .then(function (answers) {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHubUser)
            employeeArr.push(engineer)
            console.log(employeeArr)

            // engineer option was selected then prompt to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
            if (answers.addNewMember === "Add an Engineer") {
                // call addEngineer function and
                addEngineer()
                // create new engineer with class and push into new employeeArr
                //const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHubUser)
                //employeeArr.push(engineer)
                //console.log(employeeArr)
            }

            // intern option was selected then prompt to enter the intern’s name, ID, email, and school, and I am taken back to the menu
            if (answers.addNewMember === "Add an Intern") {
                addIntern()
            }

            // Finished building Team? was selected, the HTML is generated
            if (answers.addNewMember === "Finished building Team?") {
                init(employeeArr)
            }

        })
}

// prompt to enter the engineer's name, employee ID, email address, and github user
function addIntern() {
    return inquirer
        .prompt([
        {
        type: "input",
        name: "name",
        message: "Enter Intern's Name"
        },
        {
        type: "input",
        name: "id",
        message: "Enter Intern's Employee ID"
        },
        {
        type: "input",
        name: "email",
        message: "Enter Intern's Email Address"
        },
        {
        type: "input",
        name: "school",
        message: "Enter Engineer's School Name"   
        },
        {
        // presented with a menu with the option to add an engineer or an intern or to Finished building Team?
        type: "list",
        name: "addNewMember",
        message: "What are your next steps?",
        choices: ["Add an Engineer", "Add an Intern", "Finished building Team?"]
        }
        ])
        .then(function (answers) {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            employeeArr.push(intern)
            console.log(employeeArr)

            // engineer option was selected then prompt to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
            if (answers.addNewMember === "Add an Engineer") {
                // call addEngineer function and
                addEngineer()
                // create new engineer with class and push into new employeeArr
                //const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHubUser)
                //employeeArr.push(engineer)
                //console.log(employeeArr)
            }

            // intern option was selected then prompt to enter the intern’s name, ID, email, and school, and I am taken back to the menu
            if (answers.addNewMember === "Add an Intern") {
                addIntern()
            }

            // Finished building Team? was selected, the HTML is generated
            if (answers.addNewMember === "Finished building Team?") {
                init(employeeArr)
            }

        })
}




// generate HTML file
function writeToFile(employeeArr) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Team-Profile-Generator</h1>

        ${managerHTML()}
    </body>
    </html>`

}

//
function managerHTML (manager) {
    return `
    <div>
      <h2> ${employeeArr[0].name} </h2>
    </div>
    `
}

// function render employee
// before loop create empty string var
// start loop on 1
// in loop if getrole() === "Intern" then 
// in loop if getrole() === "Engineer" then 
// create intern html string
// append intern html to empty setup string
// return empty string var


function init(employeeArr) {
    fs.writeFile('./dist/team-profile.html', writeToFile(employeeArr), err => {
        if (err) throw err;
        console.log("you did it")
    })
}

addManager();