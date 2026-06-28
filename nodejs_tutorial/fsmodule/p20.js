const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        fs.unlink('demoAsyncNewRename.txt', (error) => {

            if (error) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write("File delete Fail");
                return res.end();
            }

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write("File delete Success");
            res.end();
        });

    } else {

        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write("404 Not Found");
        res.end();
    }

});

server.listen(5050, () => {
    console.log("Server Run Success");
});