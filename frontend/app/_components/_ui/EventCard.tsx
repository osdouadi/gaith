import Image from "next/image";
import React from "react";
import { formatDate } from "../../_utils/formatDate";
import { BadgeCheck, BellRing, ChevronsLeft } from "lucide-react";
import { countDown } from "../../_utils/countDown";

interface eventProps {
  cover: string;
  type: string;
  title: string;
  date: Date;
  plannerType: string;
  planner: string;
  topics: string[];
}

function EventCard({
  cover,
  type,
  title,
  date,
  plannerType,
  planner,
  topics,
}: eventProps) {
  const DateToObj = new Date(date);
  const remainingTime = countDown(DateToObj);

  return (
    <div className="bg-white shadow-md py-3">
      <div className="flex justify-between px-4 ">
        <div className="flex flex-col mb-3">
          <span className="text-primary font-bold text-xl pb-2">{type}</span>
          <h3 className="text-lg">{title}</h3>
        </div>
        <BellRing className="text-red-300" />
      </div>

      <Image
        src={"http://localhost:8000/" + cover}
        alt="event-image"
        width={400}
        height={350}
        className="rounded-b-xl"
      />
      <div className="px-4">
        <div className="flex flex-col lg:flex-row xl:flex-row gap-1 lg:gap-0 xl:gap-0  justify-between mt-3">
          <div className="flex flex-col pb-2">
            <span className="text-primary font-bold text-lg pb-1">
              موعد الحدث
            </span>
            <span>{formatDate(date)}</span>
          </div>
          <div className="flex flex-col">
            <button className="flex items-center gap-2 bg-red-300 text-white px-3 py-2 text-md rounded-md cursor-pointer mb-2">
              تسجيل الحضور
              <BadgeCheck />
            </button>
            <div className="flex flex-col">
              <span className="text-red-300 font-semibold">
                يتبقى على بداية الحدث:
              </span>
              <span>
                {remainingTime.daysDifference} أيام{" | "}
                {remainingTime.hoursDifference} ساعات{" | "}
                {remainingTime.minutesDifference} دقائق
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-2">
          <span className="text-primary font-bold text-lg pb-1">
            {plannerType}
          </span>
          <span>{planner}</span>
        </div>
        <div className="flex flex-col pb-2">
          <span className="text-primary font-bold text-lg pb-1">
            محاور الحدث
          </span>
          <ul>
            {topics.map((topic: string, index: number) => (
              <li key={index} className="flex items-start gap-1 pb-2">
                <ChevronsLeft />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
