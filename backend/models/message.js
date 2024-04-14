const mongoose = require("mongoose");
const validator = require("validator");

const messageSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "fullName field is required"],
  },
  email: {
    type: String,
    required: [true, "Email field is required"],
    lowercase: true,
    validate: [validator.isEmail, "Please insert a valid email"],
  },
  phone: {
    type: String,
    default: "لم يتم إرفاق رقم الهاتف",
  },
  message: {
    type: String,
    required: [true, "Message field is required"],
  },
});

messageSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

messageSchema.set("toJSON", {
  virtuals: true,
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
