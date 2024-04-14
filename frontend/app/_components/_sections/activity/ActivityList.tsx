import React from "react";
import Card from "../../_ui/Card";
import { Activity } from "./ActivitySection";

interface ActivityListProps {
  data: Activity[];
}

function ActivityList({ data }: ActivityListProps) {
  return (
    <div className="px-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-5 mx-auto">
      {data?.map((activity) => (
        <Card
          key={activity._id}
          activityType={activity.activityType}
          title={activity.title}
          summary={activity.summary}
          image={activity.images[0]}
          id={activity._id}
        />
      ))}
    </div>
  );
}

export default ActivityList;
