var fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);

module.exports =  function(req, res) {
    // Get the documents collection
    const db = client.db(dbName);
    const collection = db.collection('Users');
    console.log("bee")
    console.log(req.body)
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ Username : req.body.old.Username }
      , { $set: req.body.new}, function() {
      res.send({"ok": true, "user":req.body.new})
    });   
}
