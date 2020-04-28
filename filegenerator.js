var fs = require("fs");

fs.appendFile("declare.txt", "This file was created using node.js.", function (err) {
    if (err) throw err;
    console.log("saved!");
});