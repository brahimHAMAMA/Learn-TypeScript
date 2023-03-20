let post: (number | string | boolean)[] = [100, 200, "Title"]; // Error
post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good

console.log(post);

post.push("Elzero"); // Error => Cant Add

console.log(post);
// Create Destructuring Here
let [id , title, state] = post;

// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true