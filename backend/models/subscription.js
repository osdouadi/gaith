const mongoose = require("mongoose");
const validator = require("validator");

const subscriptionSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "User name field is required"],
  },
  userEmail: {
    type: String,
    required: [true, "Email field is required"],
    unique: [true, "This email is already used"],
    lowercase: true,
    validate: [validator.isEmail, "Please insert a valid email"],
  },
  active: {
    type: Boolean,
    default: true,
  },
});

subscriptionSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

subscriptionSchema.set("toJSON", {
  virtuals: true,
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;
