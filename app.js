const http = require('http');
const handlers = require('./handlers')


const server = http.createServer((req, res)=>{
   
    for (let handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }
});

server.listen(3000, ()=>{console.log('Server started at port 3000...');});


