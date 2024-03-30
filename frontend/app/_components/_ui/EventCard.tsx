import React from "react";

interface eventProps {
  cover: string;
  type: string;
  title: string;
  date: string;
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
  return (
    <div>
      <div>
        <span>{type}</span>
        <h3>{title}</h3>
      </div>
      <img src={cover} alt={title} />
      <div>
        <span>موعد الحدث</span>
        <span>{date}</span>
      </div>
      <div>
        <span>{plannerType}</span>
        <span>{planner}</span>
      </div>
      <div>
        <span>محاور الحدث</span>
        <span>المحاور</span>
      </div>
    </div>
  );
}

export default EventCard;
