"use strict";
function addAll2(...nums) {
    let result = 0;
    nums.forEach((num) => (result += num));
    return result;
}
console.log(addAll2(10, 20, 30.5, +true));
//# sourceMappingURL=function10.js.map