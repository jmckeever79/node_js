var http = require("http");
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