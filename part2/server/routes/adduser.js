var fs = require("fs");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");



// Database Name
const dbName = "mydb";

// Create a new MongoClient
const client = new MongoClient(process.env.MONGO_URL);

module.exports = function (req, res) {
  var U = req.body.Username;
  var P = req.body.Password;
  var E = req.body.Email;
  var R = req.body.Role;

  const User = { Username: U, Email: E, Role: R, Password: P };
  // Get the documents collection
  const db = client.db(dbName);
  const collection = db.collection("Users");
  // Insert some documents
  collection.insertOne(User, function (err, result) {
    if (err) throw err;
    res.send({ ok: true, user: User });
    console.log("User Added");
  });
};
