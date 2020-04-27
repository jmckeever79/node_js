var http = require("http");
var dt = require("./dtModule")

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("Hello World, you stupid dingus!</br>");
    res.write("The current time is "+dt.myDateTime());
    res.end();
}).listen(8080);    