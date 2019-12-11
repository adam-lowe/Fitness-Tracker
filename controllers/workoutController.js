var express = require("express");

var router = express.Router();

// Import the model (workout.js) to use its database functions.
var Workout = require("../models/workouts.js/index.js");

// Create all our routes and set up logic within those routes where required.

router.post("/api/workouts", function(req, res) {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
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
