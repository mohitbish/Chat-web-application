var fs = require("fs");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");


// Database Name
const dbName = "mydb";

// Create a new MongoClient
const client = new MongoClient(process.env.MONGO_URL);

module.exports =  function (req, res) {
  // Get the documents collection
  const db = client.db(dbName);
  const collection = db.collection("Groups");

  // Delete document where a is 3
  collection.deleteOne(
    { Groupname: req.body.Groupname },function (err, result) {
        assert.equal(err, null);
        if(err){
            console.log(err)
        }
        else{
            console.log("Deleted")
            res.send({"ok":true});
        }
    }
  );
};
