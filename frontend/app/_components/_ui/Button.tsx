import React from "react";

function Button({
  children,
  type,
  color,
  bgColor,
}: {
  children: string;
  type: string;
  color: string;
  bgColor: string;
}) {
  return (
    <button
      className={`flex items-center gap-2 rounded-md cursor-pointer ${type} ${color} ${bgColor} py-3 px-4`}
    >
      {children}
    </button>
  );
}

export default Button;
