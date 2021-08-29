// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }


}

const newEngineer = new Engineer('Peter', '1234', 'peter@mail.com', 'peter0123')

console.log(newEngineer.getName())

module.exports = Engineer;