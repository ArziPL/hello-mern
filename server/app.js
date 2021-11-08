const express = require('express');
const cors = require('cors')
const router = express.Router()
const app = express();


// DB + check connection with DB
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
  if(err){
    throw err;
  } else {
    console.log("Successful connection to MongoDB")
    db.close()
  }
})


app.use(cors({
  origin: "*"
}))

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));




app.use("/", router);

router.route("/login").post(function(req,res) {
  var user = {
  login:req.body.login,
  password:req.body.password
  }
  var newNumOfLogins = 0
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("helloMernBase");
    dbo.collection("users").findOne(user, function(err,result) {
      if(err){
        throw err;
      } else {
        console.log(result)
        newNumOfLogins = result.numOfLogins + 1;
      }
      var newValue = {$set : {numOfLogins:newNumOfLogins}}
      dbo.collection("users").updateOne(user, newValue, function(err,res) {
        if(err) {
          throw err;
        } else {
          console.log("Updated");
          db.close();
        }
      })
    })
    });
});


router.route("/register").post(function(req,res) {
  var toInsert = {
    email:req.body.email,
    login:req.body.login,
    password:req.body.password,
    numOfLogins:0}
  MongoClient.connect(url, function(err,db) {
    if(err){
      throw err;
    } else {
      var dbo = db.db("helloMernBase");
      dbo.collection("users").insertOne(toInsert,function(err,res) {
        if(err){
          throw err;
        } else {
          console.log("Register successful")
          db.close()
        }
      })
    }
  })
})


router.route("/delete").post(function(req,res) {
  var toDelete = {login:req.body.login}
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("helloMernBase");
    dbo.collection("users").deleteOne(toDelete,function(err,res) {
      if(err){
        throw err;
      } else {
        console.log("Removal successful")
        db.close()
      }
    })
  });
})


router.route("/getUsers").get(function(req,res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("helloMernBase");
    dbo.collection("users").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.json(result)
      db.close()
    });
  });
})


app.listen(3001, function() {
  console.log('Listening');
});