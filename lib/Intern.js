// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }



}

const newIntern = new Intern('Karol', '23', 'karol@mail.com', 'morristown')

module.exports = Intern;