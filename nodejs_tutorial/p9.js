const http = require('http');
const URL = require('url');

const server = http.createServer((req, res) => {

    const myURL = "http://rakibul.com/blog.html?year=2026&month=june";

    const myURLobj = URL.parse(myURL, true);

    const myHostName = myURLobj.host;
    const myPathName = myURLobj.pathname;
    const mySearchName = myURLobj.search;

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write("Host: " + myHostName + "<br>");
    res.write("Path: " + myPathName + "<br>");
    res.write("Search: " + mySearchName);

    res.end();
});

server.listen(5050);

console.log("Server Run Success");