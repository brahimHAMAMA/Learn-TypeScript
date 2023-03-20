let article: readonly[number, string, boolean] =[101, "Title One", true];

article = [102, "Title Two", false];

console.log(article);
// article.push(100);
console.log(article);

const [id, Title, published] = article;
console.log(id);
console.log(Title);
console.log(published);
