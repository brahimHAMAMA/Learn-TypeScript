"use strict";
var Game;

(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = levelInsane(10)] = "Insane";
})(Game || (Game = {}));


function levelInsane(num) {
    return (num < Game.Hard && num > 0) ? Game.Hard - num : 10;
}
console.log(Game.Easy);
console.log(Game.Medium);
console.log(Game.Hard);
console.log(Game.Insane);
//# sourceMappingURL=prob.js.map