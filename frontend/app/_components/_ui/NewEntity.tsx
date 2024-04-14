import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PostAPIs from "../../_api/PostAPIs";

function NewEntity() {
  const [title, setTitle] = useState(null)
  const [summary, setSummary] = useState(null)
  const [content, setContent] = useState(null)
  const [activityType, setActivityType] = useState(null)
  const queryClient = useQueryClient();
  const { register, handleSubmit, setValue } = useForm();

  const { mutate: mutatePost } = useMutation({
    mutationFn: (data) => {
      return PostAPIs.addPost(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["activities"]);
    },
  });

    const handleCreateNewProject = async (data) => {
      try {
          const newData = new FormData();
          newData.append("title", title);
          newData.append("summary", summary);
          newData.append("content", content);
          newData.append("activityType", activityType);


          images.forEach((img, index) => {
            newData.append(`images[${index}]`, img);
          });

          mutateNew({
            newData
          });
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
  

const handleImages = (e) => {
  const files = e.target.files;
  const newImages = Array.from(files);
  setImages((prevImages) => [...prevImages, ...newImages]);
};

  const handleContentChange = (newContent) => {
    setValue("content", newContent);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-6 w-full mb-6">
        <div className="flex flex-col gap-6 w-1/2">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              عنوان النشاط
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full ps-12 p-2.5 h-14"
              placeholder="ما هو عنوان النشاط الذي قام به النادي؟"
              name="title"
            />
          </div>
          <div>
            <label
              htmlFor="summary"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              وصف مختصر للنشاط
            </label>
            <input
              type="text"
              id="summary"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full ps-12 p-2.5 h-14"
              placeholder="قم بكتابة وصف موجز لنشاط النادي"
              name="summary"
              value={title}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 w-1/2">
          <div>
            <label
              htmlFor="activityType"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              توع النشاط
            </label>
            <input
              type="text"
              id="activityType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full ps-12 p-2.5 h-14"
              placeholder="ما هو عنوان النشاط الذي قام به النادي؟"
               name="activityType"
            />
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <label className="block mb-2 text-lg font-medium text-gray-900">
          تفاصيل النشاط
        </label>
        <textarea
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full ps-12 p-2.5 h-40"
          onChange={(e) => handleContentChange(e.target.value)}
          name="content"
        />
      </div>
      <div className="flex items-center mx-auto gap-10">
        <label
          htmlFor="images"
          className="block mb-2 text-lg font-medium text-gray-900"
        >
          رفع صور
        </label>
        <input
          type="file"
          id="images"
          name="images"
          onChange={handleImages}
        />
      </div>
      <button type="submit">ارسال</button>
    </form>
  );
}

export default NewEntity;
