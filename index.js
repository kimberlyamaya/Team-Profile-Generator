const inquirer = require('inquirer');
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeArr = []
const employeeStr = ""


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
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber, "Manager")
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
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHubUser, "Engineer")
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
        message: "Enter Intern's School Name"   
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
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school, "Intern")
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
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <Header class="p-3 mb-2 bg-secondary text-light d-flex justify-content-center align-items-center" style="height: 150px;">
        <h1>Team Profile Generator</h1>
        </Header>   
        
        <div class="row pt-3 justify-content-center">
    
            <div class="card border-primary mr-3 ml-3 col-3 shadow p-3 mb-5 rounded" style="max-width: 18rem; background-color: rgba(245,245,245);"> 
                <div class="card-header bg-primary text-light">
                    <h4>${employeeArr[0].name}</h4>
                    <h5><span>Image ${employeeArr[0].role}</span></h5>
                </div>
                <div class="card-body text-primary">
                    <ul class="card-text list-unstyled">
                        <li><strong>ID: </strong>${employeeArr[0].id}</li>
                        <li><strong>Email: </strong>${employeeArr[0].email}</li>
                        <li><strong>Office Number: </strong>${employeeArr[0].officeNumber}</li>
                    </ul>
                </div>
            </div>
    
            ${renderEngineer()}

            ${renderIntern()}
    
        </div>  
        
        <Footer class="p-3 mb-2 text-secondary">
            <h6><span>Team Profile Generator created by : <a href="https://github.com/kimberlyamaya"><u>Kimberly Amaya</u></a></span></h3>
        </Footer>  
    
    </body>
    </html>`
}


function renderEngineer () {
    // before loop create empty string var // moved to top of file
    // start loop on 1
    for (i = 1; i < employeeArr.length; i++) {
        // in loop if getrole() === "Engineer" then 
        if (employeeArr[i].role === "Engineer") {
            // create engineer html string
            const engineerHTML = `
            <div class="card border-primary mr-3 ml-3 col-3 shadow p-3 mb-5 rounded" style="max-width: 18rem; background-color: rgba(245,245,245);"> 
                <div class="card-header bg-primary text-light">
                    <h4>${employeeArr[i].name}</h4>
                    <h5><span>Image ${employeeArr[i].role}</span></h5>
                </div>
                <div class="card-body text-primary">
                    <ul class="card-text list-unstyled">
                        <li><strong>ID: </strong>${employeeArr[i].id}</li>
                        <li><strong>Email: </strong>${employeeArr[i].email}</li>
                        <li><strong>GitHub: </strong>${employeeArr[i].gitHubUser}</li>
                    </ul>
                </div>
            </div>`
            // append intern html to empty setup string
            //renderEngineer.append(employeeStr)
            // return empty string var
            return engineerHTML
            // pass this back through the HTML functions
        }
    }
}   


function renderIntern () {
    // before loop create empty string var // moved to top of file
    // start loop on 1
    for (i = 1; i < employeeArr.length; i++) {
        // in loop if getrole() === "Intern" then 
        if (employeeArr[i].role === "Intern") {
            // create engineer html string
            const internHTML = `
            <div class="card border-primary mr-3 ml-3 col-3 shadow p-3 mb-5 rounded" style="max-width: 18rem; background-color: rgba(245,245,245);"> 
                <div class="card-header bg-primary text-light">
                    <h4>${employeeArr[i].name}</h4>
                    <h5><span>Image ${employeeArr[i].role}</span></h5>
                </div>
                <div class="card-body text-primary">
                    <ul class="card-text list-unstyled">
                        <li><strong>ID: </strong>${employeeArr[i].id}</li>
                        <li><strong>Email: </strong>${employeeArr[i].email}</li>
                        <li><strong>School: </strong>${employeeArr[i].school}</li>
                    </ul>
                </div>
            </div>`
            // append intern html to empty setup string
            // renderEngineer.append(employeeStr)
            // return empty string var
            return internHTML
            // pass this back through the HTML functions
        }
    }
}       



function init(employeeArr) {
    fs.writeFile('./dist/team-profile.html', writeToFile(employeeArr), err => {
        if (err) throw err;
        console.log("you did it")
    })
}

addManager();