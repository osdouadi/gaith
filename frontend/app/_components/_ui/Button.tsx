import React from "react";

function Button({
  children,
  type,
  color,
}: {
  children: string;
  type: string;
  color: string;
}) {
  return (
    <button
      className={`flex items-center gap-2 rounded-md cursor-pointer ${type} ${color}`}
    >
      {children}
    </button>
  );
}

export default Button;
