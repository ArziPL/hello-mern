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

app.put('/login', function(req, res) {
  console.log("Put at /login")
  res.send("Put at /login")
});

app.post('/register', function(req, res) {
  console.log("Register at /register")
  res.send("Register at /register")
});

app.get('/getusers', function(req, res) {
  console.log("Getusers at /getusers")
  res.send("Getusers at /getusers")
});

app.delete('/delete', function(req, res) {
  console.log("Delete at /delete")
  res.send("Delete at /delete")
});

app.listen(3001, function() {
  console.log('Listening');
});