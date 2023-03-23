"use strict";
class User {
    constructor(username, theme, font) {
        this.username = username;
        this.theme = theme;
        this.font = font;
    }
    save() {
        console.log(`Save`);
    }
    update() {
        console.log(`Updated.`);
    }
}
let user1 = new User("Brahim", true, "Open Sans");
console.log(user1.username);
console.log(user1.font);
user1.save();
user1.update();
//# sourceMappingURL=main.js.map