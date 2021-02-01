const router = require("express").Router();
const Workout = require("../models/workout.js");

// Get last workout
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// add exercise to workout
router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);
  Workout.findByIdAndUpdate(req.params.id, {
      $push: {
        exercises: req.body
      }
    })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// create a workout
router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// get workouts to create stats page
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort("-day")
    .limit(7)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;