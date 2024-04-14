import Image from "next/image";
import React from "react";

function PostBanner({ post }) {
  console.log("data is", post?.images[0]);
  return (
    <div>
      <Image
        src={"http://localhost:8000/" + post?.images[0]}
        alt="post-details-image"
        width={400}
        height={400}
      />
    </div>
  );
}

export default PostBanner;
