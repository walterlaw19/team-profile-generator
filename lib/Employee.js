// TODO: Write code to define and export the Employee class
// function Employee(name) {
//     this.name =  name
// }

class Employee {
    // properties
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    // methods
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }


}

// const newEmployee = new Employee('John', 23, 'john@mail.com')

// console.log(newEmployee.getName())

module.exports = Employee;