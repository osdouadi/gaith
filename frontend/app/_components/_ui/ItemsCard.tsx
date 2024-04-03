import React from "react";

function ItemsCard({
  cardTitle,
  cardItems,
}: {
  cardTitle: string;
  cardItems: string[];
}) {
  return (
    <div className="flex flex-col">
      <h3>{cardTitle} </h3>
      <div className="flex gap-2">
        {cardItems.map((cardItem, index) => (
          <React.Fragment key={index}>
            <span>{cardItem}</span>
            {index !== cardItems.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ItemsCard;
