var fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://0.0.0.0:27017/';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);

module.exports = function(req, res) {
    // Get the documents collection
    const db = client.db(dbName);
    const collection = db.collection('Users');
    // Find some documents
    collection.find({Username: req.body.Username, Password: req.body.Password}).toArray(function(err, user) {
      assert.equal(err, null);
      console.log(user)
      if(err){
        console.log(err)
      }
      if(user[0] == [ ]){
        console.log(err)
      }
      else{
        res.send({"ok":true, "user":user[0]});
      }
      
      
    });
    
}

