const express = require("express"),
  http = require("http");
var app = express();

(fs = require("fs")), (PORT = 3000), (PORT2 = 8888);

var server = http.createServer(app);

// Cross origin resource sharing to cater for port 4200 to port 3000

const cors = require("cors");

app.use(cors());

//Enable CORS for all HTTP methods

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, post, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const bodyParser = require("body-parser");
const { METHODS } = require("http");
const { Socket } = require("socket.io");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const httpServer = http.Server(app);

const https = require("https"),
  httpsServer = https.createServer(app);

httpServer.listen(PORT, function () {
  console.log(`http Server listening on port: ${PORT}`);
});

httpsServer.listen(PORT2, () => {
  console.log(`Starting htttps server at: ${PORT2}`);
});

app.post("/adduser", require("./routes/adduser"));
app.post("/login", require("./routes/logincheck"));
app.post("/addgroup", require("./routes/addgroup"));
app.post("/removegroup", require("./routes/removegroup"));
app.get("/getgroups", require("./routes/getgroups"));
app.post("/removeuser", require("./routes/removeuser"));
app.get("/getusers", require("./routes/getusers"));
app.post("/getupdateuser", require("./routes/getupdateuser"));
app.post("/updateuser", require("./routes/updateuser"));
app.post("/addchannel", require("./routes/addchannel"));
app.post("/getchannels", require("./routes/getchannels"));
app.post("/get1group", require("./routes/get1group"));
module.exports = app;
