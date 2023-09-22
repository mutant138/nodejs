const fs = require('fs');

const reqHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;
if (url === '/') {
    fs.readFile("message.txt",{encoding: "utf8"}, (err,data)=>{
    if(err){
    console.log(err)
    }
    console.log(`data from file`+ data);
    res.setHeader('Content-Type', 'text/html');  //always put text content for every html file
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write(`<body>${data}`)
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  });
}
  else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log('Parsed>>>>>',parsedBody)
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err)=>{
        if(err){
            console.log(err)
            res.statusCode =500
            res.end("Error saving message")
        }else{
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        }
      });
    }); 
  }else{
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
  }
};

module.exports = {
    handler:reqHandler,
    someText:'Hi'
};  //we are exporting the function as a module

//module.export = reqHandler