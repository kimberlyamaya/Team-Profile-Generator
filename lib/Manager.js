const Employee = require("./Employee");

 class Manager extends Employee {
     constructor(name, id, email, officeNumber) {
         super (name, id, email)
         this.officeNumber = officeNumber
     }

     //get office Number
     getOfficeNumber() {
       return this.officeNumber
     }
     
     //get Role
     getRole() {
         return "Manager"
     }
 }

 module.exports = Manager;