"use strict";
class Player {
    constructor(fName, type, level, vip = false) {
        this.fn = fName;
        this.ty = type;
        this.le = level;
        this.vi = vip;
    }
    details() {
        return (this.vi == true)
            ? (`VIP ${this.fn}, Type Is ${this.ty} Level Is ${this.le}.`)
            : (`${this.fn}, Type Is ${this.ty} Level Is ${this.le}.`);
    }
}
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);
console.log(player1.details());
console.log(player2.details());
console.log(player3.details());
console.log(player4.details());
//# sourceMappingURL=prob.js.map