"use strict";
let showMsg = true;
function showDetails(name, age, salary) {
    let test = 10;
    if (showMsg) {
        return `Hello ${name} Age ${age} Salary is : ${salary} test variable ${test}`;
    }
    return `no data to show`;
}
console.log(showDetails('brahim', 40, 5000));
//# sourceMappingURL=08-Annototation-function.js.map