const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const breeds = require('../data/breeds.json');
const cats = require('../data/cats.json');
const { error } = require('console');

module.exports = (req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;

    if (pathname == "/cats/add-cat" && req.method == 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/addCat.html'));
        const stream = fs.createReadStream(filePath);

        stream.on('data', (chunk) => {
            let cardBreedsHolder = breeds.map(breed => `<option value="${breed}">${breed}</option>`);
            let modifiedChunk = chunk.toString().replace('{{catBreeds}}', cardBreedsHolder);
            res.write(modifiedChunk);
            res.end();
        });

        stream.on('end', () => {
            res.end();
        });

        stream.on('error', () => {
            console.log(error);
        });
    } else if (pathname == '/cats/add-breed' && req.method == 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/addBreed.html'));

        const stream = fs.createReadStream(filePath);

        stream.on('data', (chunk) => {
            res.write(chunk);
        });

        stream.on('end', () => {
            res.end();
        });
        stream.on('error', () => {
            console.log(error);
        });
    } else if (pathname == '/cats/add-breed' && req.method == 'POST') {
        let filePath = path.normalize(path.join(__dirname, '../data/breeds.json'));
        let data = '';

        req.on('data', (chunk) => {
            data += chunk;
        });

        req.on('end', () => {
            let body = qs.parse(data);

            fs.readFile(filePath, (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                let breeds = JSON.parse(data);
                breeds.push(body.breed);
                let json = JSON.stringify(breeds);
                fs.writeFile(filePath, json, () => { 'Breed added!' });

            });
            res.writeHead(301, { 'location': '/' });
            res.end();
        });

    } else if (pathname == '/cats/add-cat' && req.method == "POST") {

        let filePath = path.normalize(path.join(__dirname, '../data/cats.json'));
        let data = '';

        req.on('data', (chunk) => {
            data += chunk;
        });

        req.on('end', () => {
            let body = qs.parse(data);
            let { name, description, image, breed } = body;

            fs.readFile(filePath, (err, data) => {
                if (err) {
                    throw err;
                };
                let cats = JSON.parse(data);
                cats.push({ id: cats.length + 1, name, description, image, breed });
                let json = JSON.stringify(cats);
                fs.writeFile(filePath, json, () => { console.log('cat added'); })

            });
            res.writeHead(303, { 'location': '/' });
            res.end();
        });


    }
}