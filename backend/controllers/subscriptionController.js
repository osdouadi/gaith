const Subscription = require("../models/subscription");
const catchAsync = require("../utils/catchAsync");
const { sendSuccessfullSubscriptionEmail } = require("../utils/email");

exports.createSubscription = catchAsync(async (req, res, next) => {
  const newSubscription = await Subscription.create({
    userName: req.body.userName,
    userEmail: req.body.userEmail,
  });

  res.status(201).json({
    message: "success",
    newSubscription,
  });

  sendSuccessfullSubscriptionEmail({ userName: req.body.userName });

});
