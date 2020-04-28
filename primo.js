var http = require("http");
var fs = require("fs");
var url = require("url");
var dt = require("./dtModule");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("Hello World, you stupid dingus!</br>");
    res.write("The current time is "+dt.myDateTime()+"</br>");
    q = url.parse(req.url, true).query;
    txt = q.horse+" "+q.race;
    res.write(txt);
    res.end();
}).listen(8080);

http.createServer(function (req, res) {
    fs.readFile("frontpage.html", function (err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
}).listen(8081);