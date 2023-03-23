"use strict";
class User {
    constructor(username) {
        this.username = username;
        User.created++;
    }
    static getCount() {
        console.log(`${this.created} Object Created.`);
    }
}
User.created = 10;
let user1 = new User("Brahim");
let user2 = new User("Khalil");
let user3 = new User("Amina");
User.getCount();
//# sourceMappingURL=main.js.map