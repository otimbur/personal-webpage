const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Homepage");
  }
  if (req.url === "/about") {
    res.end("About");
  }
  res.end(`<h1> no page foud</h1>`);
});

server.listen(3000);
