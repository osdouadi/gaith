import { MessageSquareText, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  summary: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, summary, image }) => {
  console.log(image);
  return (
    <div className=" shadow-xl overflow-hidden">
      <Image
        src={"http://localhost:8000/" + image}
        alt="activity-image"
        width={400}
        height={350}
        className="rounded-t-lg object-cover"
      />
      <div className="p-3">
        <h3 className="text-[17px] font-medium">{title}</h3>
      </div>
      <div className="p-3 min-h-[100px]">
        <p className="text-[16px]">{summary}</p>
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <p className="text-primary">قراءة المزيد</p>
        </div>
        <div className="flex items-center gap-3 text-primary">
          <MessageSquareText className="cursor-pointer" />
          <ThumbsUp className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Card;
