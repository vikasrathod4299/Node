const http = require("http");
http.createServer((req, res) => {
    res.end(require("fs").readFileSync("person.json", "utf8"));
  }).listen(3001);
