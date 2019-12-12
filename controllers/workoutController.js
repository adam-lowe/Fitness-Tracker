var express = require("express");
const Plan = require("../models")
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

  Plan.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

router.post("/api/workouts", function({ body }, res) {
  Plan.create(body)
    .then(dbPlan => {
      res.json(dbPlan);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", function(req, res) {
  var id = req.params.id;

});

// Export routes for server.js to use.
module.exports = router;
