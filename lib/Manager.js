const Employee = require("./Employee");

 class Manager extends Employee {
     constructor(name, id, email, officeNumber, role) {
         super (name, id, email)
         this.officeNumber = officeNumber
         this.role = role
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