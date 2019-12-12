var express = require("express");
const databaseUrl = "workoutList";
const collections = ["workouts"];
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

var router = express.Router();

// Import the model (workout.js) to use its database functions.

// Create all our routes and set up logic within those routes where required.

router.get("/api/workouts", function(req, res) {
  console.log(req.body);

  db.workouts.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

router.post("/api/workouts", function(req, res) {
  console.log(req.body);

  db.workouts.insert(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

router.put("/api/workouts/:id", function(req, res) {
  var id = req.params.id;

});

// Export routes for server.js to use.
module.exports = router;
