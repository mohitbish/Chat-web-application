var fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');



// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(process.env.MONGO_URL);

module.exports =  function(req, res) {
    // Get the documents collection
    const db = client.db(dbName);
    const collection = db.collection('Groups');
    console.log(req.body)
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ Groupname : req.body.old.Groupname }
      , { $set: req.body.new}, function() {
      res.send({"ok": true, "Group":req.body.new})
    });   
}
