const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, salary, title, manager) {
        super(name, salary, title, manager);
        this.employees = [];
    }
    
    addEmployee(employee) {
        this.employees.push(employee);
    }
}

// const bill = new Manager('bill', 150000, 'master');
// console.log(bill)
// bill.addEmployee('leo');
// console.log(bill)

module.exports = Manager;