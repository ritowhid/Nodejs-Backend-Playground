import fs from 'fs';
import http from 'http';

const server = http.createServer((req, res) => {

    if (req.url === '/' || req.url === '/home.html') {
        let data = fs.readFileSync('home.html', 'utf8');
        res.end(data);
    }
    else if (req.url === '/about.html') {
        let data = fs.readFileSync('about.html', 'utf8');
        res.end(data);
    }
    else if (req.url === '/contact.html') {
        let data = fs.readFileSync('contact.html', 'utf8');
        res.end(data);
    }
    else if (req.url === '/terms.html') {
        let data = fs.readFileSync('terms.html', 'utf8');
        res.end(data);
    }
    else {
        res.end("404 Not Found");
    }

});

server.listen(5050, () => {
    console.log("Server Run Success");
});