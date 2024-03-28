import React from "react";
import Card from "./Card";
import { Activity } from "./ActivitySection";

interface ActivityListProps {
  data: Activity[];
}

function ActivityList({ data }: ActivityListProps) {
  console.log("List", data);
  return (
    <div className="container px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5">
      {data?.map((activity) => (
        <Card
          key={activity._id}
          title={activity.title}
          summary={activity.summary}
          image={activity.images[0]}
        />
      ))}
    </div>
  );
}

export default ActivityList;
