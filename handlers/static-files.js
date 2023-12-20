
const fs = require('fs');

module.exports = (req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;

    if (pathname.startsWith('/content') && req.method == 'GET') {

        fs.readFile(`./${pathname}`, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);

                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write("Page not found!");
                res.end();
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
        
    }else {
        return true;
    }

};