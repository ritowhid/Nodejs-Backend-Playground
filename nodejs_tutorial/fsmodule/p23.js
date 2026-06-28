const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {

    if (fs.existsSync('p23.js')) {
        res.end("True");
    } else {
        res.end("False");
    }

})
server.listen(5050, () => {
    console.log("Server Run Success");
});