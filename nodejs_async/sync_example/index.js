var fs = require("fs");

let data = fs.readFileSync("testi.txt", "utf8");

console.log(data);

console.log("ohjelman loppu");
