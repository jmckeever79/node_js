var fs = require("fs");

/*fs.appendFile("declare.txt", "You know what we did.\n", function (err) {
    if (err) throw err;
    console.log("saved!");
});*/

fs.rename("location.html", "locations.html", function() {
    console.log("success");
});