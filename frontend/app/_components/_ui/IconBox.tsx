"use client";

import React from "react";
import classNames from "classnames";

function IconBox({
  icon,
  backgroundColor,
}: {
  icon: React.ReactNode;
  backgroundColor?: "WHITE" | "BLACK";
}) {
  const bgColor = backgroundColor
    ? backgroundColor === "WHITE"
      ? "bg-white"
      : "bg-black"
    : "bg-transparent";
  return (
    <div
      className={classNames(
        "w-[2.4rem] h-[2.4rem] rounded-md flex items-center justify-center",
        bgColor
      )}
    >
      {icon}
    </div>
  );
}

export default IconBox;
