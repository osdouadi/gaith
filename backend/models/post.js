const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title field is required"],
    },
    summary: {
      type: String,
      required: [true, "Summary field is required"],
    },
    content: {
      type: String,
      required: [true, "Content field is required"],
    },
    activityType: {
      type: String,
      required: [true, "Activity field is required"],
    },
    slug: String,
    images: [String],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
  },
  { timestamps: true }
);

postSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

postSchema.set("toJSON", {
  virtuals: true,
});

const postCounterSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

postSchema.post("save", async function () {
  try {
    await PostCounter.findOneAndUpdate(
      {},
      { $inc: { count: 1 } },
      { upsert: true, new: true }
    );
  } catch (err) {
    console.error("Error updating PostCounter", err);
  }
});

postSchema.pre(
  "remove",
  { document: true, query: false },
  async function (next) {
    try {
      await PostCounter.findOneAndUpdate(
        {},
        { $inc: { count: -1 } },
        { upsert: true, new: true }
      );
      next();
    } catch (err) {
      console.error("Error updating PostCounter", err);
    }
  }
);

const Post = mongoose.model("Post", postSchema);
const PostCounter = mongoose.model("PostCounter", postCounterSchema);

module.exports = { Post, PostCounter };
