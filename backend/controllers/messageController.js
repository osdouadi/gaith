const Message = require("../models/message");
const catchAsync = require("../utils/catchAsync");

exports.createMessage = catchAsync(async (req, res, next) => {
  const newMessage = await Message.create({
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  });

  res.status(201).json({
    message: "sucess",
    newMessage,
  });
});
