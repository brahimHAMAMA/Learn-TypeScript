"use strict";
function addAll1(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
console.log(addAll1(10, 20, 30, +true));
//# sourceMappingURL=10-lesson.js.map