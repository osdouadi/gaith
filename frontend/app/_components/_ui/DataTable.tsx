"use client";

import React from "react";
import { extractDate } from "../../_utils/extractDate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PostAPIs from "../../_api/PostAPIs";

function DataTable({ data }) {
  const queryClient = useQueryClient();
  const { mutate: mutateDelete } = useMutation({
    mutationFn: (id) => {
      return PostAPIs.deletePost(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["activities"]);
    },
  });

  const deleteHandler = (id) => {
    mutateDelete(id);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-[0.95rem] text-center text-gray-500">
        <thead className="text-[1rem] text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 min-w-[200px]">
              عنوان النشاط
            </th>
            <th scope="col" className="px-6 py-3  min-w-[200px]">
              تاريخ النشاط
            </th>
            <th scope="col" className="px-6 py-3  min-w-[200px]">
              تصنيف النشاط
            </th>
            <th scope="col" className="px-6 py-3  min-w-[70px]">
              الإعجابات
            </th>
            <th scope="col" className="px-6 py-3  min-w-[70px]">
              التعليقات
            </th>
            <th scope="col" className="px-6 py-3 ">
              الإجراءات
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((activity: any, index: number) => (
            <tr className="bg-white border-b">
              <th
                key={index}
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {activity.title}
              </th>
              <td className="px-6 py-4">{extractDate(activity.createdAt)}</td>
              <td className="px-6 py-4">{activity.activityType}</td>
              <td className="px-6 py-4">{activity.likes.length}</td>
              <td className="px-6 py-4">{activity.comments.length}</td>
              <td className="px-6 py-4 flex items-center gap-1 justify-center">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  تعديل
                </a>
                <button
                  className="font-medium text-blue-600 hover:underline"
                  onClick={() => deleteHandler(activity.id)}
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
