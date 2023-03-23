"use strict";
class User {
    constructor(_username, salary, address = "Nill") {
        this._username = _username;
        this.salary = salary;
        this.address = address;
        this.msg = () => `Hello ${this._username} Your Salary Is ${this.salary}, Your address Is ${this.address}`;
    }
    sayMsg() {
        return `Hello ${this._username} Your Salary Is ${this.salary}`;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
}
let userOne = new User("Brahim", 6000);
console.log(userOne.username);
userOne.username = "Ali";
console.log(userOne.username);
console.log(userOne.sayMsg());
console.log(userOne.msg());
//# sourceMappingURL=main.js.map