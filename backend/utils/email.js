const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: "osdouadi@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const sendSuccessfullSubscriptionEmail = ({ userName }) => {
  const successfullSubscriptionTemplate = fs.readFileSync(
    "./template/successfullSubscription.html",
    "utf8"
  );

  const compiledEmailTemplate = handlebars.compile(
    successfullSubscriptionTemplate
  );

  const htmlContent = compiledEmailTemplate({
    userName,
  });

  const mailOptions = {
    from: "client@gmail.com",
    to: "osdouadi@gmail.com",
    subject: "test",
    html: htmlContent,
  };

  mailOptions.attachment = [
    {
      filename: "image7.png",
      path: "./../template/images/image-7.png",
      cid: "image7"
    },
  ];

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email", error);
    } else {
      console.log("Email sent", info.response);
    }
  });
};

module.exports = { sendSuccessfullSubscriptionEmail };
