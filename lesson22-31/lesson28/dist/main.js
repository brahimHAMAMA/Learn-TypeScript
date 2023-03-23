"use strict";
class User {
    constructor(username, salary, address = "Nill") {
        this.username = username;
        this.salary = salary;
        this.address = address;
        this.msg = () => `Hello ${this.username} Your Salary Is ${this.salary}, Your address Is ${this.address}`;
    }
    sayMsg() {
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
}
let userOne = new User("Brahim", 6000);
console.log(userOne.sayMsg());
console.log(userOne.msg());
//# sourceMappingURL=main.js.map