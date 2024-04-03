const express = require("express");
const eventController = require("./../controllers/eventController");
const { singleUpload } = require("../middleware/upload");
const resizeImage = require("../middleware/resizeImage");

const router = express.Router();

router.get("/", eventController.getPaginatedEvents);
router.get("/:id", eventController.getEventById);
router.post(
  "/",
  singleUpload.single("cover"),
  resizeImage("events", 2000, 1333, "events"),
  eventController.createEvent
);
router.put("/:id", eventController.updateEvent);
router.delete("/:id", eventController.deleteEvent);

module.exports = router;
