var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express();

app.use(cors({
  origin: "*"
}))

app.use(bodyParser.json())

var urlencodedParser = bodyParser.urlencoded({
  extend:false
})

app.get('/', function(req, res) {
  res.send("Get at /")
  console.log("Get at /")
});

app.post('/login', function(req, res) {
  console.log("Post request at /login")
  console.log(req.body.currentDate)
});

app.listen(3001, function() {
  console.log('Listening');
});