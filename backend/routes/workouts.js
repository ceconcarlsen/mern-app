const express = require("express");
const Workout = require("../models/WorkoutModel");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//UPDATE a single workout
router.patch("/:id", updateWorkout);

//DELETE a single workout
router.delete("/:id", deleteWorkout);

module.exports = router;
