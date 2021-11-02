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

app.post('/login', function(req, res) {
  console.log("\n")
  console.log(req.body.login)
  console.log(req.body.password)
  console.log("Post at /login")
});

app.post('/register', function(req, res) {
  console.log("\n")
  console.log(req.body.email)
  console.log(req.body.login)
  console.log(req.body.password)
  console.log("Register at /register")
});

app.get('/getusers', function(req, res) {
  console.log("Getusers at /getusers")
});

app.delete('/delete', function(req, res) {
  console.log("Delete at /delete")
});

app.listen(3001, function() {
  console.log('Listening');
});