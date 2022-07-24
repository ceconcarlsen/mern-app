const express = require("express");
const Workout = require("../models/WorkoutModel");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//UPDATE a single workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a workout" });
});

//DELETE a single workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});

module.exports = router;
