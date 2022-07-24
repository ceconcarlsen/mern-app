const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//defines the structure of the schema
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

/*
model apply the schema so we can interact with the db 
ex: Workout.find() --> similar to prisma interaction findMany
*/

module.exports = mongoose.model("Workout", workoutSchema);
