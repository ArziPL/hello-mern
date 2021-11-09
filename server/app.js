// REQUIRES
const express = require("express");
const cors = require("cors");
const router = express.Router();
const app = express();

// DB + check connection with DB
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log("Connection not established, something went wrong");
    throw err;
  } else {
    console.log("Successful connection to MongoDB");
    db.close();
  }
});

// MIDDLEWARE
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// ROUTES
app.use("/", router);

// FINDE USER AND ADD +1 TO NUMOFLOGINS
router.route("/login").post(function (req, res) {
  var user = {
    login: req.body.login,
    password: req.body.password,
  };
  var newNumOfLogins = 0;
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("helloMernBase");
    dbo.collection("users").findOne(user, function (err, result) {
      try {
        console.log(result);
        newNumOfLogins = result.numOfLogins + 1;
      } catch (error) {
        res.status(401).send("Something broke");
        console.log(`Something broke at /login, ${error}`);
        return;
      }
      var newValue = { $set: { numOfLogins: newNumOfLogins } };
      dbo.collection("users").updateOne(user, newValue, function (err, res) {
        try {
          console.log("Login successful, num of logins updated");
          db.close();
        } catch (error) {
          console.log("Error");
          db.close();
        }
      });
    });
  });
});

// CREATE NEW USER
router.route("/register").post(function (req, res) {
  var toInsert = {
    email: req.body.email,
    login: req.body.login,
    password: req.body.password,
    numOfLogins: 0,
  };
  MongoClient.connect(url, function (err, db) {
    if (err) {
      throw err;
    } else {
      var dbo = db.db("helloMernBase");
      dbo.collection("users").insertOne(toInsert, function (err, res) {
        try {
          console.log("Register successful");
          db.close();
        } catch (error) {
          res.status(500).send("Something broke");
          console.log(`Something broke at /register, ${error}`);
          db.close();
        }
      });
    }
  });
});

// DELETE USER BY HIS NICKNAME
router.route("/delete").post(function (req, res) {
  var toDelete = { login: req.body.login };
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("helloMernBase");
    dbo.collection("users").deleteOne(toDelete, function (err, res) {
      try {
        console.log("Removal successful");
        db.close();
      } catch (error) {
        res.status(500).send("Something broke");
        console.log(`Something broke at /delete, ${error}`);
        db.close();
      }
    });
  });
});

// SENDS ALL USERS
router.route("/getUsers").get(function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("helloMernBase");
    dbo
      .collection("users")
      .find({})
      .toArray(function (err, result) {
        try {
          res.json(result);
          console.log("Response send successful");
          db.close();
        } catch (error) {
          res.status(500).send("Something broke");
          console.log(`Something broke at /getUsers, ${error}`);
          db.close();
        }
      });
  });
});

app.listen(3001, function () {
  console.log("Listening");
});
