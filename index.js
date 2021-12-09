const inquirer = require('inquirer');
const fs = require("fs");
const Employee = require('./lib/Employee');


function addEmployee() {
    return inquirer
        .prompt([
        {
        type: 'input',
        name: 'name',
        message: 'Enter Employee Name?'
        }
        ])
        .then(function (answers) {
        const newEmployee = new Employee(answers.name);
        console.log(newEmployee)
        })
}

addEmployee();