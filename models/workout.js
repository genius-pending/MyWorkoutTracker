const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Setup variable for virtuals and depolyment 

const opts = {
    toJSON: {
        virtuals: true
    }
};

const workoutSchema = new Schema({
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [{
            type: {
                type: String,
                required: "An exercise type is required",
            },
            name: {
                type: String,
                trim: true,
                required: "Enter the exercise's name"
            },
            duration: {
                type: Number,
                required: "Enter a duration"
            },
            weight: {
                type: Number,
                
            },
            reps: {
                type: Number,
                
            },
            sets: {
                type: Number,
               
            },
            distance: {
                type: Number,
            }
        }]
    },
    opts
);

// total duration of exercises added
workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;