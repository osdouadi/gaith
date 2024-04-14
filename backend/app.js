const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path")
require("dotenv/config");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const upload = multer();
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const eventRouter = require("./routes/eventRoutes");
const bannerRouter = require("./routes/bannerRoutes");
const gallaryRouter = require("./routes/gallaryRoutes");
const subscriptionRouter = require("./routes/subscriptionRoutes");
const messageRouter = require("./routes/messageRoutes");


app.use(cors());
app.options("*", cors);


const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "backend")));


// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/events", eventRouter);
app.use("/api/v1/banners", bannerRouter);
app.use("/api/v1/gallaries", gallaryRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/messages", messageRouter);

// Database
mongoose
  .connect(process.env.DATABASE, {
    dbName: "ghaithClub",
  })
  .then(() => {
    console.log("Database connection is ready...");
  })
  .catch((error) => {
    console.log("Database connection failed", error);
  });

server.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
