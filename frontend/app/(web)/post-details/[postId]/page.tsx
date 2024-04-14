"use client";

import PostAPIs from "../../_api/PostAPIs";
import React, { useEffect } from "react";
import Breadcrump from "../../_components/_ui/Breadcrump";
import PostBanner from "./_components/PostBanner";
import PostInfo from "./_components/PostInfo";
import { useQuery } from "@tanstack/react-query";
import ActivityList from "../../_components/_sections/activity/ActivityList";
import { usePathname } from "next/navigation";

let isInitialFetch = true;

function PostDetails({ params }) {
  const path = usePathname();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["PostDetails"],
    queryFn: async () => {
      const { data } = await PostAPIs.getPostById(params?.postId);
      return data;
    },
  });

  useEffect(() => {
    if (isInitialFetch) {
      isInitialFetch = false;
      return;
    }
    refetch();
  }, [refetch]);

  return (
    <div className="px-6 py-8 md:px-28">
      <Breadcrump path={path} id={data?.post?._id} />
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-around mt-10 gap-5  sm:gap-0">
        <PostBanner post={data?.post} />
        <PostInfo post={data?.post} />
      </div>
    </div>
  );
}

export default PostDetails;
