
function yesOrNo(val: number | boolean | string) : "Yes" | "No" {
  return val > 10? "Yes": "No";
}

// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False