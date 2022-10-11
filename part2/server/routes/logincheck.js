var fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);

module.exports = function(req, res) {
    // Get the documents collection
    const db = client.db(dbName);
    const collection = db.collection('Users');
    // Find some documents
    collection.find({UserName: req.body.UserName, Password: req.body.Password}).toArray(function(err, user) {
      assert.equal(err, null);
      if (user == []){
        res.send({"ok": false});
      }
      else{
        res.send({"ok":true, "user":user[0]});
      }
      
      
    });
    
}