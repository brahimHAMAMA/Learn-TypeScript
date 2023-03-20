"use strict";
let post = [100, 200, "Title"];
post = ["Title", 100, true];
post = [100, "Title", true];
console.log(post);
post.push("Elzero");
console.log(post);
let [id, title, state] = post;
console.log(id);
console.log(title);
console.log(state);
//# sourceMappingURL=prob.js.map