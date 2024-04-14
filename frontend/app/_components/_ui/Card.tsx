import { useMutation } from "@tanstack/react-query";
import { Heart, MessageSquareText, Share2, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PostAPIs from "../../_api/PostAPIs";
import { useAuth } from "../../_hooks/useAuth";

interface CardProps {
  title: string;
  summary: string;
  image: string;
  id: number;
}

const Card: React.FC<CardProps> = ({
  activityType,
  title,
  summary,
  image,
  id,
}) => {

  const {user} = useAuth()

  const userId = user?.data?.user?.id;

  const {
  mutate: mutateLike,
  isLoading,
  isError,
  } = useMutation({
    mutationFn: async (postId: string, userId: string ) => {
      await PostAPIs.postLike(postId, userId);
      return mutateLike;
    },
    onSuccess: () => {

    }
  });

  const handleLikeClick = () => {
  mutateLike(id, userId);
  }

  return (
    <div className="shadow-xl overflow-hidden pb-16 relative">
      <Image
        src={"http://localhost:8000/" + image}
        alt="activity-image"
        width={400}
        height={350}
        className="rounded-t-lg object-cover"
      />
      <div className="m-4 mt-5">
        <span className="bg-red-300 text-white px-4 py-2.5 rounded-md text-sm">
          {activityType}
        </span>
      </div>
      <div className="px-3 py-3">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="px-3 pb-2 min-h-[1rem]">
        <p className=" text-base">{summary}</p>
      </div>
      <div className="flex items-center justify-between p-4 absolute bottom-0 w-full right-0 pt-[200px]">
        <Link
          href={`/post-details/${id}`}
          className="text-white bg-primary px-4 py-2.5 rounded-md text-sm"
        >
          قراءة المزيد
        </Link>
        <div className="flex items-center gap-4 text-red-300">
          <Share2 className="cursor-pointer" />
          <MessageSquareText className="cursor-pointer" />
          <Heart className="cursor-pointer" onClick={handleLikeClick} />
        </div>
      </div>
    </div>
  );
};

export default Card;
