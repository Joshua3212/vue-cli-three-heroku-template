const express = require("express");
const port = 80;
const app = express();

app.use(express.static("./dist/"));
app.get(/.*/, function(req, res) {
  res.sendfile("./dist/index.html");
});
app.listen(port);

console.log("Server started...");
