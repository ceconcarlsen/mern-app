require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

//app
const app = express();

//middleware
/* 
Returns middleware that only parses json and only 
looks at requests where the Content-Type header matches the type option.
*/
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

//connection to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listening for request AFTER we're connected to db
    app.listen(process.env.PORT, () => {
      console.log("Listening on port", process.env.PORT);
    });
  })
  .catch((error) => console.log(error));
