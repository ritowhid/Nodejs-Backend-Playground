const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {

    fs.access('Home.html', (err) => {
        if (err) {
            res.end("False");
        } else {
            res.end("True");
        }
    });

})

server.listen(5050, () => {
    console.log("Server Run Success");
});