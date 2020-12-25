const express = require("express");
const port = 80;
const app = express();

app.use(express.static("/data/files/dist/"));
app.get(/.*/, function(req, res) {
  res.sendfile("/data/files/dist/index.html");
});
app.listen(port);

console.log("Server started.....");
