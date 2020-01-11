var fs = require("fs");

fs.readFile("testi.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

console.log("ohjelman loppu");
