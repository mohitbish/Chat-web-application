var fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');



// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(process.env.MONGO_URL);

module.exports = function(req,res) {
    var N = req.body.Groupname;
    var CL = req.body.Channellist;
    var UL = req.body.userlist;
    console.log(req.body)

    const Group = {Groupname: N, Channellist: CL, userlist: UL }
    // Get the documents collection
    const db = client.db(dbName);
    const collection = db.collection('Groups');
    // Insert some documents
    collection.insertOne(Group, function(err, result) {
        if (err) throw err;
        res.send({"ok":true, "group":Group});
        console.log("Group Added");
    });
    
}
