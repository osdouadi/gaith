const mongoose = require("mongoose");
const Comment = require("../models/comment");
const Like = require("../models/like");
const catchAsync = require("../utils/catchAsync");
const { Post, PostCounter } = require("./../models/post");

// Create a new post
exports.createPost = catchAsync(async (req, res, next) => {
  const images = req.resizedImagePaths;

  const newPost = await Post.create({
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,
    activityType: req.body.activityType,
    images,
  });

  res.status(201).json({
    status: "success",
    data: {
      newPost,
    },
  });
});

// Get paginated posts
exports.getPaginated = catchAsync(async (req, res, next) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 9;
  const skip = (page - 1) * limit;

  const totalPosts = await Post.countDocuments();
  const pageCount = Math.ceil(totalPosts / limit);

  const activityList = await Post.find({})
    .skip(skip)
    .limit(limit)
    .populate("comments");

  res.status(200).json({
    message: "success",
    activityList,
    page,
    totalPosts,
    pageCount,
  });
});

// Get post by id
exports.getPostById = catchAsync(async (req, res, next) => {
  const post = await Post.findById(req.params.id).populate({
    path: "comments",
    populate: { path: "userId" },
  });

  if (!post) {
    return res.status(404).json({
      status: "fail",
      message: "Post not found",
    });
  }

  res.status(200).json({
    status: "success",
    post,
  });
});

// Add comment
exports.addComment = catchAsync(async (req, res, next) => {
  // Create a comment document
  const newComment = await Comment.create({
    text: req.body.text,
    postId: req.body.postId,
    userId: req.body.userId,
  });

  // Find the post which the comment belongs to
  const post = await Post.findById(req.body.postId);

  // Add the comment's id to the comments array
  post.comments.push(newComment._id);

  // Save the updated post
  await post.save();

  res.status(200).json({
    success: true,
    post,
  });
});

exports.toggleLike = catchAsync(async (req, res, next) => {
  let postId = req.params.id;

  if (!postId) {
    return res.status(400).send({
      message: "Invalid post id",
      data: {},
    });
  }

  Post.findOne({ _id: postId })
    .then((post) => {
      if (!post) {
        return res.status(400).send({
          message: "No post found",
          data: {},
        });
      } else {
        let current_user = req.body.userId;

        Like.findOne({
          postId: postId,
          userId: current_user,
        })
          .then(async (postLike) => {
            try {
              if (!postLike) {
                let postLikeDoc = new Like({
                  postId: postId,
                  userId: current_user,
                });

                let likeData = await postLikeDoc.save();
                Post.updateOne(
                  {
                    _id: postId,
                  },
                  {
                    $push: { likes: likeData },
                  }
                );
                return res.status(200).send({
                  message: "Like successfully added",
                  data: {},
                });
              } else {
                await Like.deleteOne({
                  _id: postLike._id,
                });

                await Post.updateOne(
                  {
                    _id: postLike.postId,
                  },
                  {
                    $pull: { likes: postLike._id },
                  }
                );

                return res.status(200).send({
                  message: "Like successfully removed",
                  data: {},
                });
              }
            } catch (err) {
              return res.status(400).send({
                message: err.message,
                data: err,
              });
            }
          })
          .catch((err) => {
            return res.status(400).send({
              message: err.message,
              data: err,
            });
          });
      }
    })
    .catch((err) => {
      return res.status(400).send({
        message: err.message,
        data: err,
      });
    });
});

// Update a post
exports.updatePost = catchAsync(async (req, res, next) => {
  updatedData = {
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,
    cover: req.body.cover,
    images: req.body.images,
  };

  const post = await Post.findByIdAndUpdate(req.params.id, updatedData, {
    new: true,
  });

  if (!post) {
    res.status(404).json({ message: "Post not found" });
  } else {
    res.status(200).json({
      message: "post updated successfully",
      data: {
        post,
      },
    });
  }
});

// Delete post
exports.deletePost = catchAsync(async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  try {
    await PostCounter.findOneAndUpdate(
      {},
      { $inc: { count: -1 } },
      { upsert: true, new: true }
    );
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }

  res.status(204).json({ message: "Post deleted successfully" });
});
