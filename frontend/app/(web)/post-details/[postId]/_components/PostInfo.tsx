import React from "react";

function PostInfo({ post }) {
  return (
    <div>
      <h2 className="text-[20px]">{post?.title}</h2>
      <h2 className="text-[15px] text-gray-400">{post?.activityType}</h2>
      <p>{post?.content}</p>
    </div>
  );
}

export default PostInfo;
