"use strict";
let user = {
    id: 100,
    username: "brahim",
    country: "Alg"
};
console.log(user);
function getdata(data) {
    console.log(`id Is ${data.id}`);
    console.log(`username Is ${data.username}`);
    console.log(`country Is ${data.country}`);
}
getdata({ username: "khalil", country: "UK" });
//# sourceMappingURL=main.js.map