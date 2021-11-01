var express = require('express');
var cors = require('cors')

var app = express();

app.use(cors({
  origin: "*"
}))

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get('/', function(req, res) {
  console.log("Get at /")
  res.send("Get at /")
});

app.post('/login', function(req, res) {
  console.log("Post at /login")
  res.send("Post at /login")
});

app.listen(3001, function() {
  console.log('Listening');
});