
var fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);

module.exports = async function(req,res) {
    // Get the documents collection
    const db = client.db(dbName);
    const collection = db.collection('Groups');

    // Delete document where a is 3
    collection.deleteOne({Groupname: req.body.Groupname}, await function(err, result) {
        if (err) throw err;
        console.log("Group deleted");
    }); 
       
}
