"use strict";
function Moving(btns) {
  console.log(`Get Moving Up ${btns.up}`);
  console.log(`Get Moving Down ${btns.down}`);
  console.log(`Get Moving Up ${btns.left}`);
  console.log(`Get Moving Down ${btns.right}`);
}
Moving({
  up: "Jump",
  down: "go down",
  left: "go left",
  right: "go right",
  x: true,
});
//# sourceMappingURL=main.js.map
