const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  cover: {
    type: String,
    default: "event-default.png",
  },
  type: {
    type: String,
    required: [true, "Type field is required"],
  },
  title: {
    type: String,
    required: [true, "Title field is required"],
  },
  date: {
    type: Date,
    required: [true, "Date field is required"],
  },
  plannerType: {
    type: String,
    required: [true, "PlannerType field is required"],
  },
  planner: {
    type: String,
    default: "نادي غيث",
  },
  topics: {
    type: [{ type: String, trim: true, minLength: 1 }],
    validate: {
      validator: function (arr) {
        return arr.length > 0;
      },
      message: "At least one topic is required",
    },
    validate: {
      validator: function (arr) {
        return arr.length <= 4;
      },
      message: "Cannot add more than 4 topics",
    },
  },
});

eventSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

eventSchema.set("toJSON", {
  virtuals: true,
});


const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
