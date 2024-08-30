const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('Welcome to our home page');
  }
  if(req.url === '/about'){
    res.end('Here is our short history');
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We cant find the page you are loooking fot</p>
    <a href="/"> back gome</a>
  `)
  
})

server.listen(5000);