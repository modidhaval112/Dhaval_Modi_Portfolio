const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const MongoClient = require("mongodb").MongoClient;
var db;
app.use(bodyParser.urlencoded({ extended: false }));

MongoClient.connect(
  "mongodb+srv://Dhaval:Dhaval@cluster0-77wex.mongodb.net/test?retryWrites=true&w=majority",
  (err, database) => {
    if (err) return console.log(err);
    db = database.db("database1"); // whatever your database name is
    app.listen(3001, () => {
      console.log("listening on 3001");
    });

    app.get("/", (req, res) => {
      db.collection("database1_collection")
        .find()
        .toArray(function(err, results) {
          console.log(results);
        });
    });
  }
);

// app.get("/api/greeting", (req, res) => {
//   const name = req.query.name || "World";
//   res.setHeader("Content-Type", "application/json");
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

// app.listen(3001, () =>
//   console.log("Express server is running on localhost:3001")
// );
