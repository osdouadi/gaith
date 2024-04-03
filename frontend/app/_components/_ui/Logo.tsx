import React from "react";

function Logo({ textColor, type }: { textColor: string; type: string}) {
  return (
    <div className={`${type} ${textColor}`}>
      <span>نادي</span>
      <span className="-mt-5">غيث</span>
    </div>
  );
}

export default Logo;
