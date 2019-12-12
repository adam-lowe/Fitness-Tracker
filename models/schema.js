const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
  fit: {
    type: String,
    trim: true,
    required: true
  },

  reps: {
    type: Number,
    required: true
  }
});

const Plan = mongoose.model("Plan", PlanSchema);

module.exports = Plan;