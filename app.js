const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    //console.log(req.url,req.method,req.headers)
    //process.exit();
    const url=req.url;
    const method=req.method;
    if(url === '/'){
    //res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My first Page</title></head>')
    res.write('<body><h1>Welcome Home</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end();
    }
    if(url === "/message" && method==='POST') {
       fs.writeFileSync('message.txt','Dummy')
       res.statusCode=302;
       res.setHeader('Location','/');
       return res.end()
    }
});
server.listen(3000);