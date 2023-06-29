var fs = require("fs");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://0.0.0.0:27017/";

// Database Name
const dbName = "mydb";

// Create a new MongoClient
const client = new MongoClient(url);

module.exports = function (req, res) {
  // Get the documents collection
  const db = client.db(dbName);
  const collection = db.collection("Users");
  console.log(req.body);
  // Find some documents
  collection.findOne({Username: req.body.Username, Password: req.body.Password}, function (err, result) {
    if (err) throw err;
    console.log(result);
    if(result === null){
      res.send({ok:false})
    }else{
      res.send({ok:true, user:result})
    }
  });
};
