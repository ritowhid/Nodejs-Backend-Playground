const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        try {
            const data = fs.readFileSync('Home.html');

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();

        } catch (error) {

            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write("Internal Server Error");
            res.end();
        }

    } else {

        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write("404 Not Found");
        res.end();
    }

});

server.listen(4040, () => {
    console.log("Server Run Success");
});