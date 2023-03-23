"use strict";
let user = {
    id: 100,
    username: "brahim",
    country: "Alg",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => `Welcome ${user.username}`,
    getDouble(num) { return num * 2; }
};
console.log(user);
console.log(user.id);
console.log(user.username);
console.log(user.country);
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(3));
//# sourceMappingURL=main.js.map