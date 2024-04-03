"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../_ui/SectionTitle";
import ActivityList from "./ActivityList";
import PostAPIs from "../../../_api/PostAPIs";
import Pagination from "../../_ui/Pagination";

export interface Activity {
  _id: string;
  activityType: string;
  title: string;
  summary: string;
  content: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  comments: any[];
  reactions: any[];
  __v: number;
}

let isInitialFetch = true;

function Activities() {
  const [page, setPage] = useState(1);
  const limit = 9;

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["Activities"],
    queryFn: async () => {
      const { data } = await PostAPIs.getPaginatedPosts(page, limit);
      return data;
    },
  });

  useEffect(() => {
    if (isInitialFetch) {
      isInitialFetch = false;
      return;
    }
    refetch();
  }, [refetch, page]);

  return (
    <section>
      <SectionTitle title="نشاطات و فعاليات النادي" textColor="text-primary" />
      <div className="container">
        <ActivityList data={data?.activityList} />
        <Pagination
          onPageChange={(page) => setPage(page)}
          currentPage={page}
          totalPageCount={data?.pageCount}
          siblingCount={1}
        />
      </div>
    </section>
  );
}

export default Activities;
