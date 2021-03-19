// importing HTTP module from node
const http = require("http");
// import http from "http";

//Constants :
const hostname = "localhost";
const port = 3000;

// Setting up the server :
const server = http.createServer((req, res) => {
  console.log("Headers : " + req.headers);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Hello World !</h1></body></html>");
});

// starting the server :
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
