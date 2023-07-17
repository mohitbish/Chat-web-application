var fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');



// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(process.env.MONGO_URL);

module.exports = function(req,res) {
    // Get the documents collection
    const db = client.db(dbName);
    const collection = db.collection('Users');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      data = JSON.stringify(docs)
      res.send(data)
    });
}