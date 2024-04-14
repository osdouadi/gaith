const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "FirstName field is required!"],
  },
  lastName: {
    type: String,
    required: [true, "LastName field is required!"],
  },
  university: {
    type: String,
    required: [true, "University field is required!"],
  },
  speciality: {
    type: String,
    required: [true, "Speciality field is required!"],
  },
  email: {
    type: String,
    required: [true, "Email field is required!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please insert a valid email"],
  },
  phone: {
    type: String,
    required: [true, "Phone field is required!"],
  },
  role: {
    type: String,
    enum: ["user", "editor", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Password field is required"],
    min: [6, "Password is less than 6 character"],
    max: [12, "Password is more than 12 character"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (p) {
        return p === this.password;
      },
      message: "Passwords do not match!",
    },
  },
  active: {
    type: Boolean,
    default: true,
  },
});

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.set("toJSON", {
  virtuals: true,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  providedPassword,
  userPassword
) {
  return await bcrypt.compare(providedPassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
