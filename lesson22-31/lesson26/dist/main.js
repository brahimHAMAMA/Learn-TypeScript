"use strict";
const KID = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;
function getHard() {
    return 3;
}
var kids;
(function (kids) {
    kids[kids["Five"] = 25] = "Five";
    kids[kids["Seven"] = 20] = "Seven";
    kids[kids["Ten"] = 15] = "Ten";
})(kids || (kids = {}));
var level;
(function (level) {
    level[level["kid"] = 15] = "kid";
    level[level["Easy"] = 9] = "Easy";
    level[level["Medium"] = 6] = "Medium";
    level[level["Hard"] = getHard()] = "Hard";
})(level || (level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number Of Sconds Is ${level.Medium}`);
}
lvl = "Hard";
if (lvl === "Hard") {
    console.log(`The Level Is ${lvl} And Number Of Sconds Is ${level.Hard}`);
}
//# sourceMappingURL=main.js.map