"use strict";
function printInConsole(...paras) {
    paras.forEach((para) => {
        (typeof (para) == "number")
            ? console.log(`The Value Is ${para} And Type Is ${typeof (para)}`)
            : ((typeof (para) == "string")
                ? console.log(`The Value Is ${para} And Type Is ${typeof (para)}`)
                : console.log(`The Value Is ${para} And Type Is ${typeof (para)}`));
    });
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log("Done");
console.log(printInConsole("A", "B", "C"));
console.log("Done");
console.log(printInConsole(true, false, false, true, true));
console.log("Done");
//# sourceMappingURL=prob.js.map